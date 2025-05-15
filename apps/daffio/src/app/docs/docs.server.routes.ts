import {
  RenderMode,
  ServerRoute,
} from '@angular/ssr';

import {
  DAFF_DOC_KIND_PATH_SEGMENT_MAP,
  DAFF_DOCS_DESIGN_PATH,
  DaffDocKind,
} from '@daffodil/docs-utils';

import { apiServerRoutes } from './api/api.server.routes';
import { docsDesignServerRoutes } from './design/design.server.routes';
import { guidesServerRoutes } from './guides/guides.server.routes';
import { packagesServerRoutes } from './packages/packages.server.routes';

export const docsServerRoutes = (parent: string): Array<ServerRoute> => [
  {
    path: parent,
    renderMode: RenderMode.Server,
  },
  ...packagesServerRoutes(`${parent}/${DAFF_DOC_KIND_PATH_SEGMENT_MAP[DaffDocKind.PACKAGE]}`),
  ...guidesServerRoutes(`${parent}/${DAFF_DOC_KIND_PATH_SEGMENT_MAP[DaffDocKind.GUIDE]}`),
  ...apiServerRoutes(`${parent}/${DAFF_DOC_KIND_PATH_SEGMENT_MAP[DaffDocKind.API]}`),
  ...docsDesignServerRoutes(`${parent}/${DAFF_DOCS_DESIGN_PATH}`),
];
