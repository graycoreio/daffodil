#!/usr/bin/env node
import { workspaces } from '@angular-devkit/core';
import { NodeJsSyncHost } from '@angular-devkit/core/node';
import { ProjectDefinition } from '@angular-devkit/core/src/workspace/definitions';
import type { ProjectConfiguration } from '@nx/devkit';
import {
  Argument,
  Command,
  Option,
} from 'commander';
import { existsSync } from 'fs';
import {
  readFile,
  writeFile,
  glob,
} from 'fs/promises';
import {
  dirname,
  join,
  resolve,
} from 'path';

import { DaffJson } from './daff-json.type';
import packagesJson from './packages.json';
import { DaffVersioningPlatform } from './platform.type';
import { DAFF_VERSIONING_PLATFORMS } from './platforms.const';
import {
  DAFF_JSON_DEFAULT,
  DaffVersionString,
  getDriverVersion,
  syncProjects,
} from './public_api';

interface Options {
  project?: string;
  all?: boolean;
}

const WORKSPACE_ROOT_SEARCH_DEPTH = 5;

export const nxProjects = async (dir: string) => {
  const ret: Record<string, ProjectConfiguration> = {};
  for await (const entry of glob(join(dir, '**', 'project.json'))) {
    ret[entry] = JSON.parse(await readFile(entry, 'utf-8'));
  }
  return {
    nx: ret,
  };
};

export const daffJson = (path: string) => ({
  read: async () => {
    try {
      return <DaffJson>JSON.parse(await readFile(path, 'utf-8'));
    } catch (error: any) {
      throw new Error(`Failed to parse daff.json: ${error.message}`);
    }
  },
  write: (daff: DaffJson) => {
    try {
      return writeFile(path, JSON.stringify(daff, null, 2), 'utf-8');
    } catch (error: any) {
      throw new Error(`Failed to save daff.json: ${error.message}`);
    }
  },
});

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

const main = () => {
  const cwd = process.cwd();
  const program = new Command('daff');

  let workspaceOrProject: ReturnType<typeof ngJson | typeof nxProjects> | undefined;
  let rootDir: string;

  const searchDirectories = Array(WORKSPACE_ROOT_SEARCH_DEPTH).fill(null).map((_, i) => resolve(join(cwd, ...['.'].concat(Array(i).fill('..')))));
  for (const dir of searchDirectories) {
    if (existsSync(join(dir, 'angular.json'))) {
      workspaceOrProject = ngJson(join(dir, 'angular.json'));
      rootDir = dir;
      break;
    } else if (existsSync(join(dir, 'nx.json'))) {
      workspaceOrProject = nxProjects(dir);
      rootDir = dir;
      break;
    }
  }

  if (!workspaceOrProject) {
    throw new Error(`Could not find angular.json or nx.json in the following directories: ${searchDirectories}. Unable to determine workspace root, bailing out.`);
  }

  const sync = async (projectNames?: Array<string>) => {
    if ('read' in workspaceOrProject) {
      const {
        angular,
      } = await workspaceOrProject.read();
      for (const [projectName, project] of [...angular.projects.entries()].filter(([pName, p]) => (!Array.isArray(projectNames) || projectNames.includes(pName)) && p.extensions.projectType === 'application')) {
        try {
          angular.projects.set(
            projectName,
            syncProjects(
              await daffJson(join(project.root, 'daff.json')).read(),
              {
                angular: project,
                name: projectName,
              },
							<any>packagesJson,
            ).angular,
          );
        } catch (error: any) {
          console.warn(`Failed to update project config for ${projectName}, skipping.`, error.message);
        }
      }
      await workspaceOrProject.write(angular);
    } else {
      const {
        nx,
      } = await workspaceOrProject;
      for (const [path, project] of Object.entries(nx).filter(([_, p]) => (!Array.isArray(projectNames) || (p.name && projectNames.includes(p.name))) && p.projectType === 'application')) {
        try {
          await writeFile(
            path,
            JSON.stringify(
              syncProjects(
                await daffJson(join((dirname(path)), 'daff.json')).read(),
                {
                  nx: project,
                  name: project.name || path,
                },
								<any>packagesJson,
              ),
              null,
              2,
            ),
          );
        } catch (error: any) {
          console.warn(`Failed to update project config for ${project.name}, skipping.`, error.message);
        }
      }
    }
  };
  const version = async (platform: DaffVersioningPlatform, v: DaffVersionString, opts: Options) => {
    const projectNames: Array<string> = [];
    if ('read' in workspaceOrProject) {
      // angular path
      const {
        angular,
      } = await workspaceOrProject.read();
      let projects: Array<[string, ProjectDefinition]>;
      if (opts.all) {
        projects = [...angular.projects.entries()]
          .filter(([_, project]) => project.extensions.projectType === 'application');
      } else {
        const projectName = opts.project || angular.projects.size ? [...angular.projects.keys()][0] : null;
        if (!projectName) {
          throw new Error('Default project could not be determined, please specify a project with the --project flag.');
        }
        const project = angular.projects.get(projectName);
        if (!project) {
          throw new Error(`Could not find ${projectName} in the angular.json`);
        }
        projects = [[projectName, project]];
      }
      for (const [projectName, project] of projects) {
        const daffPath = join(rootDir, project.root, 'daff.json');
        const {
          read,
          write,
        } = daffJson(daffPath);
        const daff = existsSync(daffPath)
          ? await read()
          : {
            $schema: join(rootDir, 'node_modules/@daffodil/cli/daff.schema.json'),
            ...DAFF_JSON_DEFAULT,
          };
        daff.drivers = getDriverVersion(platform, v);
        await write(daff);
        projectNames.push(projectName);
      }
    } else {
      // nx path
      const {
        nx,
      } = await workspaceOrProject;
      let projects = Object.entries(nx).filter(([_, project]) => project.projectType === 'application');
      if (!opts.all) {
        if (!opts.project && projects.length !== 1) {
          throw new Error('Default project could not be determined, please specify a project with the --project flag.');
        }
        if (opts.project) {
          projects = projects.filter(([_, project]) => {
            const name = project.name;
            return opts.project === name || name?.endsWith(`/${opts.project}`);
          });
          if (projects.length < 1) {
            throw new Error(`Could not find a project.json for ${opts.project}`);
          }
        }
      }
      for (const [path, project] of projects) {
        const daffPath = join(dirname(path), 'daff.json');
        const {
          read,
          write,
        } = daffJson(daffPath);
        const daff = existsSync(daffPath)
          ? await read()
          : {
            $schema: join(rootDir, 'node_modules/@daffodil/cli/daff.schema.json'),
            ...DAFF_JSON_DEFAULT,
          };
        daff.drivers = getDriverVersion(platform, v);
        await write(daff);
        if (project.name) {
          projectNames.push(project.name);
        }
      }
    }
    await sync(projectNames);
  };

  program.addCommand(new Command('sync').action(sync).description('Syncs all daff.jsons to the project configuration. Only needed if you manually edit daff.json.'));
  program.addCommand(new Command('version')
    .addArgument(new Argument('platform', 'The platform for which to set a version').choices(DAFF_VERSIONING_PLATFORMS))
    .addArgument(new Argument('version', 'The version to set for the specified project and platform'))
    .addOption(new Option('-p, --project <project>', 'The project for which to set the version.').conflicts('all'))
    .addOption(new Option('-a, --all', 'Indicates that the version should be set for all applications in the workspace.').conflicts('project'))
    .action(version),
  );

  program.parse();
};

if (require.main === module) {
  main();
}
