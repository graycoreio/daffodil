import {
  RenderMode,
  ServerRoute,
} from '@angular/ssr';


export const daffioDocsServerRoutes = (parent: string): Array<ServerRoute> => [
  {
    path: parent,
    renderMode: RenderMode.Prerender,
  },
  {
    path: `${parent}/**`,
    renderMode: RenderMode.Prerender,
  },
];
