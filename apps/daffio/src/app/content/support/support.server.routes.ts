import {
  RenderMode,
  ServerRoute,
} from '@angular/ssr';

export const supportServerRoutes = (parent: string): Array<ServerRoute> => [
  {
    path: parent,
    renderMode: RenderMode.Prerender,
  },
];
