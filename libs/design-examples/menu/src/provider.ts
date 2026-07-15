import { makeEnvironmentProviders } from '@angular/core';

import { provideDaffDocsExampleContent } from '@daffodil/docs';

export const provideDaffDesignMenuExamplesContent = () => makeEnvironmentProviders(provideDaffDocsExampleContent(
  {
    id: 'basic-menu',
    component: () => import('./basic-menu/basic-menu.component').then(c => c.BasicMenuExampleComponent),
  },
  {
    id: 'menu-with-icon-toggle',
    component: () => import('./menu-with-icon-toggle/menu-with-icon-toggle.component').then(c => c.MenuWithIconToggleExampleComponent),
  },
  {
    id: 'menu-with-id',
    component: () => import('./menu-with-id/menu-with-id.component').then(c => c.MenuWithIdExampleComponent),
  },
  {
    id: 'menu-with-position',
    component: () => import('./menu-with-position/menu-with-position.component').then(c => c.MenuWithPositionExampleComponent),
  },
));

