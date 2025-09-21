import { Routes } from '@angular/router';

export const supportRoute: Routes = [
  {
    path: 'support',
    loadComponent: () =>
      import('./support.component').then(c => c.DaffioSupportComponent),
    data: {
      title: 'Support',
      description: 'Want to work with us? Fill out the contact form and we will reach out shortly!',
    },
  },
];
