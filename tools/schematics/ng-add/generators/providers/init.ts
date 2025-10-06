import {
  Rule,
  SchematicContext,
  Tree,
} from '@angular-devkit/schematics';

import { addCoreProvidersToStandalone } from './standalone';
import { isStandaloneApp } from '../../../utils';
import { NgAddOptions } from '../../schema';

export const initAppProviders = (options: NgAddOptions, project: any): Rule => (tree: Tree, context: SchematicContext) => {
  const isStandalone = isStandaloneApp(tree, project);

  if (!isStandalone) {
    throw new Error('The @daffodil/commerce schematic only supports standalone applications.');
  }

  return addCoreProvidersToStandalone(options, project)(tree, context);
};
