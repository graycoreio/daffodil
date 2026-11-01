import { inject } from '@angular/core';
import {
  RenderMode,
  ServerRoute,
} from '@angular/ssr';

import { daffioReadRenderableDocsRoutes } from './renderable-routes';
import { DAFFIO_DOCS_PATH_TOKEN } from '../services/docs-path.token';

/**
 * Builds the server routes for a docs section.
 * Every doc in the section is prerendered at build time so that the site can be served statically.
 *
 * @param parent The path of the docs section, without a leading slash.
 * @param excludedChildren Child path segments of `parent` that have their own, more specific, server routes.
 * Docs under these children will not be prerendered by the `parent` wildcard route.
 */
export const daffioDocsServerRoutes = (parent: string, excludedChildren: Array<string> = []): Array<ServerRoute> => [
  {
    path: parent,
    renderMode: RenderMode.Prerender,
  },
  {
    path: `${parent}/**`,
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      const prefix = `/${parent}/`;
      const excludedPrefixes = excludedChildren.map((child) => `${prefix}${child}/`);
      const routes = await daffioReadRenderableDocsRoutes(inject(DAFFIO_DOCS_PATH_TOKEN));

      return routes
        .filter((route) => route.startsWith(prefix) && !excludedPrefixes.some((excluded) => route.startsWith(excluded)))
        .map((route) => ({ '**': route.slice(prefix.length) }));
    },
  },
];
