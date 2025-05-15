import {
  RenderMode,
  ServerRoute,
} from '@angular/ssr';

export const homepageServerRoutes = (parent: string): Array<ServerRoute> => [
  {
    path: parent,
    renderMode: RenderMode.Prerender,
  },
];
