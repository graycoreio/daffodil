#!/usr/bin/env node
import {
  Builder,
  BuilderContext,
  BuilderOutput,
  createBuilder,
} from '@angular-devkit/architect';
import { workspaces } from '@angular-devkit/core';
import { NodeJsSyncHost } from '@angular-devkit/core/node';
import type { ProjectConfiguration } from '@nx/devkit';
import { existsSync } from 'fs';
import {
  readFile,
  writeFile,
  glob,
} from 'fs/promises';
import { join } from 'path';

import { DaffJsonProject } from './daff-json.type';
import packagesJson from './packages.json';
import { DaffPackagePlatformVersions } from './packages.type';
import { syncProjects } from './sync-projects';

interface Options extends DaffJsonProject {}

export const nxProjects = async (dir: string) => {
  const ret: Record<string, ProjectConfiguration> = {};
  for await (const entry of glob(join(dir, '**', 'project.json'))) {
    ret[entry] = JSON.parse(await readFile(entry, 'utf-8'));
  }
  return {
    nx: ret,
  };
};

export const ngJson = (path: string) => {
  const host = workspaces.createWorkspaceHost(new NodeJsSyncHost());
  return {
    read: async () => {
      try {
        const workspace = (await workspaces.readWorkspace(path, host)).workspace;
        return {
          angular: workspace,
        };
      } catch (error: any) {
        throw new Error('Failed to read angular.json');
      }
    },
    write: (wksp: workspaces.WorkspaceDefinition) => workspaces.writeWorkspace(wksp, host, path),
  };
};

export const createSyncBuilder = (packages: DaffPackagePlatformVersions): Builder<any> => createBuilder(async (options: Options, context: BuilderContext): Promise<Extract<BuilderOutput, {success: boolean}>> => {
  let workspaceOrProject: ReturnType<typeof ngJson | typeof nxProjects> | undefined;

  if (existsSync(join(context.workspaceRoot, 'angular.json'))) {
    workspaceOrProject = ngJson(join(context.workspaceRoot, 'angular.json'));
  } else if (existsSync(join(context.workspaceRoot, 'nx.json'))) {
    workspaceOrProject = nxProjects(context.workspaceRoot);
  }

  if (!workspaceOrProject) {
    return {
      error: `Could not find angular.json or nx.json in the following directory: ${context.workspaceRoot}, bailing out.`,
      success: false,
    };
  }

  if ('read' in workspaceOrProject) {
    const {
      angular,
    } = await workspaceOrProject.read();
    for (const [projectName, project] of [...angular.projects.entries()].filter(([pName, p]) => (!context.target?.project || context.target.project === pName) && p.extensions.projectType === 'application')) {
      try {
        angular.projects.set(
          projectName,
          syncProjects(
            options,
            {
              angular: project,
              name: projectName,
            },
            packages,
          ).angular,
        );
      } catch (error: any) {
        context.logger.warn(`Failed to update project config for ${projectName}, skipping.`, error.message);
      }
    }
    await workspaceOrProject.write(angular);
  } else {
    const {
      nx,
    } = await workspaceOrProject;
    for (const [path, project] of Object.entries(nx).filter(([_, p]) => (!context.target?.project || (p.name && context.target.project === p.name)) && p.projectType === 'application')) {
      try {
        await writeFile(
          path,
          JSON.stringify(
            syncProjects(
              options,
              {
                nx: project,
                name: project.name || path,
              },
              packages,
            ),
            null,
            2,
          ),
        );
      } catch (error: any) {
        context.logger.warn(`Failed to update project config for ${project.name}, skipping.`, error.message);
      }
    }
  }

  return {
    success: true,
  };
});

const builder = createSyncBuilder(<any>packagesJson);

export default builder;
