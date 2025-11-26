import {
  RenderMode,
  ServerRoute,
} from '@angular/ssr';

import { DAFF_DOCS_PATH } from '@daffodil/docs-utils';

import { homeServerRoute } from './content/home/home.server.routes';
import { notFoundServerRoutes } from './content/not-found/not-found.server.routes';
import { supportServerRoutes } from './content/support/support.server.routes';
import { docsServerRoutes } from './docs/docs.server.routes';

export const serverRoutes: Array<ServerRoute> = [
  homeServerRoute,
  ...docsServerRoutes(DAFF_DOCS_PATH),
  ...supportServerRoutes('support'),
  ...notFoundServerRoutes('404'),
  {
    path: '**',
    renderMode: RenderMode.Server,
  },
];
