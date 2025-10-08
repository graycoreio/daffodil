import { normalize } from '@angular-devkit/core';
import {
  Rule,
  Tree,
  apply,
  url,
  template,
  move,
  mergeWith,
  MergeStrategy,
  forEach,
  filter,
} from '@angular-devkit/schematics';

import { NgAddOptions } from '../schema';

export const addTemplateFiles = (options: NgAddOptions, project: any): Rule => (_tree: Tree) => {
  const driver = options.driver || 'demo';

  const templateSource = apply(url('./files'), [
    // Filter files based on driver selection
    filter((path) => {
      // Always include these files
      if (path.includes('/app/app.html.template') ||
          path.includes('/app/app.ts.template') ||
          path.includes('/app/daff/navigation/components/') ||
          path.includes('/app/daff/pages/') ||
          path.includes('/app/daff/product/components/') ||
          path.includes('/daff/product/resolvers/')) {
        return true;
      }

      // Demo-only files (dynamic drivers and fake drivers)
      if (path.includes('/daff/external-router/drivers/') ||
          path.includes('/daff/navigation/drivers/dynamic/') ||
          path.includes('/daff/product/drivers/dynamic/') ||
          path.includes('/daff/product/drivers/fake/') ||
          path.includes('/daff/driver/magento/') ||
          path.includes('/daff/driver/shopify/')) {
        return driver === 'demo';
      }

      return false;
    }),
    template({
      ...options,
      driver,
    }),
    forEach((fileEntry) => {
      // Remove .template extension from files
      if (fileEntry.path.endsWith('.template')) {
        return {
          content: fileEntry.content,
          path: normalize(fileEntry.path.replace(/\.template$/, '')),
        };
      }
      return fileEntry;
    }),
    move(project.sourceRoot),
  ]);

  return mergeWith(templateSource, MergeStrategy.Overwrite);
};
