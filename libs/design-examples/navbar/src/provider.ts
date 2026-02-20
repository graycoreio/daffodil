import { makeEnvironmentProviders } from '@angular/core';

import { provideDaffDocsExampleContent } from '@daffodil/docs';

export const provideDaffDesignNavbarExamplesContent = () => makeEnvironmentProviders(provideDaffDocsExampleContent(
  {
    id: 'basic-navbar',
    component: () => import('./basic-navbar/basic-navbar.component').then(c => c.BasicNavbarExampleComponent),
  },
  {
    id: 'blurred-navbar',
    component: () => import('./blurred-navbar/blurred-navbar.component').then(c => c.BlurredNavbarExampleComponent),
  },
  {
    id: 'contained-navbar',
    component: () => import('./contained-navbar/contained-navbar.component').then(c => c.ContainedNavbarExampleComponent),
  },
  {
    id: 'elevated-navbar',
    component: () => import('./elevated-navbar/elevated-navbar.component').then(c => c.ElevatedNavbarExampleComponent),
  },
));

