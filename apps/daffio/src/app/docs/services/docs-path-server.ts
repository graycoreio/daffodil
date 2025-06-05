import { isPlatformServer } from '@angular/common';
import {
  inject,
  PLATFORM_ID,
  Provider,
  REQUEST,
} from '@angular/core';
import { resolve } from 'path';

import { DAFFIO_DOCS_PATH_TOKEN } from './docs-path.token';
import { environment } from '../../../environments/environment';

/**
 * The path on the server to the docs folder.
 */
const daffioDocsPathServerFactory = () =>
  // the SSR runs from the daffio directory and doesn't use dotenv so we rely on cwd
  // devs should have the DAFF_ROOT env var set in their .env
  resolve(!process.env.DAFF_ROOT ? process.cwd() : resolve(process.env.DAFF_ROOT, 'dist/apps/daffio'), environment.docsPath);

/**
 * The path on the compile machine to the docs folder.
 */
const daffioDocsPathPrerenderFactory = () =>
  // the SSR runs from the daffio directory and doesn't use dotenv so we rely on cwd
  // devs should have the DAFF_ROOT env var set in their .env
  !process.env.DAFF_ROOT ? resolve(process.cwd(), '../../dist') : resolve(process.env.DAFF_ROOT, 'dist');

/**
 * A provider for the docs path for the server.
 */
export function provideServerDocsPath(): Provider {
  return {
    provide: DAFFIO_DOCS_PATH_TOKEN,
    useFactory: () => {
      // if we're on the server but we don't have access to the SSR request
      // then we must be in prerender
      const isPrerender = isPlatformServer(inject(PLATFORM_ID)) && !inject(REQUEST);
      return isPrerender ? daffioDocsPathPrerenderFactory() : daffioDocsPathServerFactory();
    },
  };
};
