import { Provider } from '@angular/core';
import {
  resolve,
  dirname,
  join,
} from 'node:path';
import { fileURLToPath } from 'node:url';

import { DAFFIO_DOCS_PATH_TOKEN } from './docs-path.token';

export const isAngularDevServer = () => import.meta.url.includes('.angular');

export const findProjectRoot = (fileUrl: string = import.meta.url) => {
  let current = dirname(fileURLToPath(fileUrl));

  while(current !== dirname(current)) {
    const angularCacheFolder = join(dirname(current),'.angular');
    if(angularCacheFolder === current) {
      return dirname(current);
    }

    current = dirname(current);
  }

  throw new Error('No project root found, does the .angular folder exist');
};

/**
 * A provider for the docs path for the server.
 */
export function provideServerDocsPath(): Provider {
  return {
    provide: DAFFIO_DOCS_PATH_TOKEN,
    useFactory: () => {
      if(isAngularDevServer()) {
        return resolve(findProjectRoot(import.meta.url), 'dist/docs-assets/docs');
      }
      //This works so long as chunks are located in the same folder as the default Angular `server.mjs`.
      //If these move, we'll get missing files.
      return resolve(dirname(fileURLToPath(import.meta.url)), '../browser/assets/daffio/docs');
    },
  };
};
