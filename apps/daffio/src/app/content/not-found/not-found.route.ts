import { Routes } from '@angular/router';

export const notFoundRoute: Routes = [
  {
    path: '404',
    loadComponent: () =>
      import('./not-found.component').then(c => c.DaffioNotFoundComponent),
    data: {
      title: '404 Error',
      description:
        'Oops! The page you were looking for doesn’t exist. You may have mistyped the address or the page may have moved.',
    },
  },
];
