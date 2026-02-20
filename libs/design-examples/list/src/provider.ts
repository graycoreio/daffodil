import { makeEnvironmentProviders } from '@angular/core';

import { provideDaffDocsExampleContent } from '@daffodil/docs';

export const provideDaffDesignListExamplesContent = () => makeEnvironmentProviders(provideDaffDocsExampleContent(
  {
    id: 'basic-list',
    component: () => import('./basic-list/basic-list.component').then(c => c.BasicListExampleComponent),
  },
  {
    id: 'icon-list',
    component: () => import('./icon-list/icon-list.component').then(c => c.IconListExampleComponent),
  },
  {
    id: 'multiline-list',
    component: () => import('./multiline-list/multiline-list.component').then(c => c.MultilineListExampleComponent),
  },
  {
    id: 'nav-list',
    component: () => import('./nav-list/nav-list.component').then(c => c.NavListExampleComponent),
  },
));

