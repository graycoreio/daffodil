import { Provider } from '@angular/core';
import { config } from 'dotenv';
import { resolve } from 'path';

import { DAFFIO_DOCS_PATH_TOKEN } from './docs-path.token';
import { environment } from '../../../environments/environment';

/**
 * The path on the server to the docs folder.
 */
const daffioDocsPathServerFactory = () => {
  const { error, parsed } = config();
  // the SSR runs from the daffio directory and doesn't use dotenv so we rely on cwd
  // devs should have the DAFF_ROOT env var set in their .env
  return resolve(error || !parsed.DAFF_ROOT ? process.cwd() : resolve(parsed.DAFF_ROOT, 'apps/daffio'), environment.docsPath);
};

/**
 * A provider for the docs path for the server.
 */
export function provideServerDocsPath(): Provider {
  return {
    provide: DAFFIO_DOCS_PATH_TOKEN,
    useFactory: daffioDocsPathServerFactory,
  };
};
