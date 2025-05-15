import {
  RenderMode,
  ServerRoute,
} from '@angular/ssr';

export const whyPwaServerRoutes = (parent: string): Array<ServerRoute> => [
  {
    path: parent,
    renderMode: RenderMode.Prerender,
  },
];
