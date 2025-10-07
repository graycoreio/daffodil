import {
  Rule,
  SchematicContext,
  Tree,
} from '@angular-devkit/schematics';

import { updateStandaloneRouting } from './standalone';
import { isStandaloneApp } from '../../../utils/app-detection';
import { NgAddOptions } from '../../schema';

/**
 * Updates or creates the application routing configuration for both standalone and module-based Angular apps.
 *
 * This function automatically detects the app type and delegates to the appropriate routing handler.
 *
 * @param options - The ng-add schematic options
 * @param project - The Angular workspace project configuration
 * @returns A Rule function that updates the routing configuration
 */
export const initAppRouting = (_options: NgAddOptions, project: any): Rule => (tree: Tree, context: SchematicContext) => {
  const isStandalone = isStandaloneApp(tree, project);

  if (!isStandalone) {
    throw new Error('The @daffodil/commerce schematic only supports standalone applications.');
  }

  return updateStandaloneRouting(`${project.sourceRoot}/app/app.routes.ts`)(tree, context);
};
