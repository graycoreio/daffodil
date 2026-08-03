import {
  Rule,
  SchematicContext,
  Tree,
} from '@angular-devkit/schematics';
import { updateWorkspace } from '@schematics/angular/utility/workspace';

import { isSupportedPlatform } from '../../../versioning/public_api';
import { NgAddOptions } from '../../schema';

const shouldScaffoldDaffConfig = (options: NgAddOptions): boolean =>
  options.driver === 'magento' || options.driver === 'demo';

export const addBuildCondition = (options: NgAddOptions, projectName_: string): Rule => {
  if (!shouldScaffoldDaffConfig(options)) {
    return (tree: Tree) => tree;
  }

  return (tree: Tree, context: SchematicContext) => isSupportedPlatform(options.driver) && options.driverVersion
    ? updateWorkspace(async (workspace) => {
      for (const [projectName, project] of [...workspace.projects.entries()].filter(([pName, p]) => p.extensions.projectType === 'application')) {
        const target = project?.targets.get('build');
        if (target && options.driver && options.driverVersion) {
          target.options ??= {};
          target.options.builder = '@daffodil/commerce:application';
          target.options.drivers = {
            [options.driver]: options.driverVersion,
          };
          workspace.projects.set(
            projectName,
            project,
          );
        }
      }
    })(tree, context)
    : tree;
};
