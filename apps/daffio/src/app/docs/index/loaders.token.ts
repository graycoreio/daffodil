import { InjectionToken } from '@angular/core';

import { DaffDocKind } from '@daffodil/docs-utils';

/**
 * A function that lazy loads a docs nav index.
 * The generated JSON is resolved directly from `dist/docs-assets` via the `@daffodil/*` path alias.
 */
export type DaffioDocsIndexLoader = () => Promise<{ default: unknown }>;

/**
 * The lazy loaders for the nav index of each doc kind.
 *
 * The indices are bundled as lazy JS chunks rather than fetched as JSON assets.
 * An index is shared by every doc page of its kind (the API index is >1MB),
 * so it must not be serialized into each prerendered page via transfer state.
 * As a content-hashed chunk, the browser downloads it once and caches it across pages.
 */
export const DAFFIO_DOCS_INDEX_LOADERS = new InjectionToken<Partial<Record<DaffDocKind, DaffioDocsIndexLoader>>>(
  'DAFFIO_DOCS_INDEX_LOADERS',
  {
    factory: () => ({
      [DaffDocKind.API]: () => import('@daffodil/docs-assets/docs/api/index.json'),
      [DaffDocKind.PACKAGE]: () => import('@daffodil/docs-assets/docs/packages/index.json'),
      [DaffDocKind.GUIDE]: () => import('@daffodil/docs-assets/docs/guides/index.json'),
    }),
  },
);
