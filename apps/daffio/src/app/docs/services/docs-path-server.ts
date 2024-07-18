import { Provider } from '@angular/core';
import { join } from 'path';

import { DAFF_DOCS_ASSET_PATH_TOKEN } from '@daffodil/documentation';

import { environment } from '../../../environments/environment';

/**
 * The path on the server to the docs folder.
 */
const daffioDocsPathServerFactory = () => join(process.cwd(), environment.docsPath);

/**
 * A provider for the docs path for the server.
 */
export function provideServerDocsPath(): Provider {
  return {
    provide: DAFF_DOCS_ASSET_PATH_TOKEN,
    useFactory: daffioDocsPathServerFactory,
  };
};
