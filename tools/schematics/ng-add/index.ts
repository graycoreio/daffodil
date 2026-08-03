import {
  Rule,
  SchematicContext,
  Tree,
  chain,
} from '@angular-devkit/schematics';
import { NodePackageInstallTask } from '@angular-devkit/schematics/tasks';
import { getWorkspace } from '@schematics/angular/utility/workspace';
import chalk from 'chalk';

import { addBuildCondition } from './generators/daff-config/daff-config';
import { addDependenciesToPackageJson } from './generators/dependencies';
import { initAppProviders } from './generators/providers/init';
import { initAppRouting } from './generators/routing/init';
import { addTemplateFiles } from './generators/template-setup';
import { NgAddOptions } from './schema';

export function ngAdd(options: NgAddOptions): Rule {
  return async (tree: Tree, context: SchematicContext) => {
    // If this is not a new project, stop processing
    if (options.isNewProject === false) {
      context.logger.warn(
        [
          '',
          chalk.yellow.bold('[WARN] ') +
          chalk.yellow('`@daffodil/commerce` does not currently support setting up an existing project.'),
          chalk.yellow('       It is designed to be used on a new Angular application.'),
          '',
        ].join('\n'),
      );
      return (sourceTree: Tree) => sourceTree;
    }

    const workspace = await getWorkspace(tree);
    const projectName = options.project || <string>workspace.extensions.defaultProject;
    const project = workspace.projects.get(projectName);

    if (!project) {
      throw new Error(`Project "${options.project}" not found.`);
    }

    const rules: Rule[] = [];

    // Add dependencies to package.json
    if (!options.skipPackageJson) {
      rules.push(addDependenciesToPackageJson(options));
    }

    // Add core Daffodil configuration for demo
    rules.push(initAppProviders(options, project));

    // Setup routing
    rules.push(initAppRouting(options, project));

    // Add template files for demo components
    rules.push(addTemplateFiles(options, project));

    // pre-populate angular.json build conditions (magento only)
    rules.push(addBuildCondition(options, projectName));

    // Schedule package installation
    if (!options.skipPackageJson) {
      context.addTask(new NodePackageInstallTask());
    }

    return chain(rules);
  };
}
