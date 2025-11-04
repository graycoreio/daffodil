import {
  RenderMode,
  ServerRoute,
} from '@angular/ssr';

export const serverRoutes: Array<ServerRoute> = [
  // homeServerRoute,
  // ...docsServerRoutes(DAFF_DOCS_PATH),
  // ...supportServerRoutes('support'),
  // ...whyPwaServerRoutes('why-pwa'),
  // ...notFoundServerRoutes('404'),
  {
    path: '**',
    renderMode: RenderMode.Server,
  },
];
