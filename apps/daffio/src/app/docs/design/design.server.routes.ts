import { ServerRoute } from '@angular/ssr';

import {
  DAFF_DOC_KIND_PATH_SEGMENT_MAP,
  DaffDocKind,
} from '@daffodil/docs-utils';

import { apiServerRoutes } from '../api/api.server.routes';
import { daffioDocsServerRoutes } from '../routing/server-routes';

export const docsDesignServerRoutes = (parent: string): Array<ServerRoute> => [
  ...apiServerRoutes(`${parent}/${DAFF_DOC_KIND_PATH_SEGMENT_MAP[DaffDocKind.API]}`),
  ...daffioDocsServerRoutes(`${parent}/${DAFF_DOC_KIND_PATH_SEGMENT_MAP[DaffDocKind.COMPONENT]}`),
  ...daffioDocsServerRoutes(parent),
];
