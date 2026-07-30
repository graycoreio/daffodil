import {
  Rule,
  SchematicContext,
  Tree,
} from '@angular-devkit/schematics';
import { updateWorkspace } from '@schematics/angular/utility/workspace';
import chalk from 'chalk';

import {
  DAFF_JSON_DEFAULT,
  DaffJson,
  isSupportedPlatform,
  packagesJson,
  syncProjects,
} from '@daffodil/cli/versioning';

import { NgAddOptions } from '../../schema';

const DAFF_JSON_PATH = 'daff.json';

const shouldScaffoldDaffConfig = (options: NgAddOptions): boolean =>
  options.driver === 'magento' || options.driver === 'demo';

export const createDaffJson = (options: NgAddOptions, projectName: string): Rule =>
  (tree: Tree, context: SchematicContext) => {
    if (!shouldScaffoldDaffConfig(options)) {
      return tree;
    }

    if (tree.exists(DAFF_JSON_PATH)) {
      context.logger.warn(
        chalk.yellow(`[WARN] daff.json already exists at the workspace root; leaving it unchanged.`),
      );
      return tree;
    }

    const body = {
      ...DAFF_JSON_DEFAULT,
    };

    if (isSupportedPlatform(options.driver) && options.driverVersion) {
      body.drivers = {
        [options.driver]: options.driverVersion,
      };
    }

    tree.create(DAFF_JSON_PATH, JSON.stringify(body, null, 2) + '\n');
    return tree;
  };

export const addBuildCondition = (options: NgAddOptions, projectName_: string): Rule => {
  if (!shouldScaffoldDaffConfig(options)) {
    return (tree: Tree) => tree;
  }

  return (tree: Tree, context: SchematicContext) => {
    try {
      const daffJson = tree.readJson(DAFF_JSON_PATH);
      return daffJson
        ? updateWorkspace(async (workspace) => {
          for (const [projectName, project] of [...workspace.projects.entries()].filter(([pName, p]) => p.extensions.projectType === 'application')) {
            try {
              workspace.projects.set(
                projectName,
                syncProjects(
									<DaffJson>daffJson,
									{
									  angular: project,
									  name: projectName,
									},
									packagesJson,
                ).angular,
              );
            } catch (error: any) {
              console.warn(`Failed to update project config for ${projectName}, skipping.`, error.message);
            }
          }
        })(tree, context)
        : tree;
    } catch (error) {
      return tree;
    }
  };
};
