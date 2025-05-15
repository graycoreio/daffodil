import {
  RenderMode,
  ServerRoute,
} from '@angular/ssr';

import { daffioDocsServerRoutes } from '../routing/server-routes';

export const guidesServerRoutes = (parent: string): Array<ServerRoute> => [
  {
    path: parent,
    renderMode: RenderMode.Server,
  },
  daffioDocsServerRoutes(parent)[1],
];
