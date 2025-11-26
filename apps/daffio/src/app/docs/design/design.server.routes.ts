import { ServerRoute } from '@angular/ssr';

import {
  DAFF_DOC_KIND_PATH_SEGMENT_MAP,
  DaffDocKind,
} from '@daffodil/docs-utils';

import { daffioDocsServerRoutes } from '../routing/server-routes';

export const docsDesignServerRoutes = (parent: string): Array<ServerRoute> => [
  ...daffioDocsServerRoutes(`${parent}/${DAFF_DOC_KIND_PATH_SEGMENT_MAP[DaffDocKind.COMPONENT]}`),
  ...daffioDocsServerRoutes(parent),
];
