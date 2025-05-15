import {
  RenderMode,
  ServerRoute,
} from '@angular/ssr';

export const notFoundServerRoutes = (parent: string): Array<ServerRoute> => [
  {
    path: parent,
    renderMode: RenderMode.Server,
    status: 404,
  },
];
