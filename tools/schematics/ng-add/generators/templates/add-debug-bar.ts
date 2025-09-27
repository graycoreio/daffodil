import {
  Rule,
  Tree,
} from '@angular-devkit/schematics';

import { addTemplateToComponent } from '../../../utils/template-utils';

export const addDebugBarToAppTemplate = (options: any, project: any): Rule => (tree: Tree) => {
  const appComponentPath = `${project.sourceRoot}/app/app.html`;
  const appComponentTsPath = `${project.sourceRoot}/app/app.ts`;

  const debugBarTemplate = '\n<daff-debug-bar></daff-debug-bar>';

  return addTemplateToComponent(
    tree,
    appComponentTsPath,
    appComponentPath,
    debugBarTemplate,
    'DaffDebugBarComponent',
    '@daffodil/dev-tools',
  );
};
