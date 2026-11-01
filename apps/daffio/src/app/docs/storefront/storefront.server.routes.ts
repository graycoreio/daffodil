import { ServerRoute } from '@angular/ssr';

import {
  DAFF_DOC_KIND_PATH_SEGMENT_MAP,
  DaffDocKind,
} from '@daffodil/docs-utils';

import { daffioDocsServerRoutes } from '../routing/server-routes';

const STOREFRONT_CHILD_SECTIONS = [
  DAFF_DOC_KIND_PATH_SEGMENT_MAP[DaffDocKind.COMPONENT],
];

export const docsStorefrontServerRoutes = (parent: string): Array<ServerRoute> => [
  ...STOREFRONT_CHILD_SECTIONS.flatMap((child) => daffioDocsServerRoutes(`${parent}/${child}`)),
  ...daffioDocsServerRoutes(parent, STOREFRONT_CHILD_SECTIONS),
];
