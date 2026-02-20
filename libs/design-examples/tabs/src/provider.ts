import { makeEnvironmentProviders } from '@angular/core';

import { provideDaffDocsExampleContent } from '@daffodil/docs';

export const provideDaffDesignTabsExamplesContent = () => makeEnvironmentProviders(provideDaffDocsExampleContent(
  {
    id: 'basic-tabs',
    component: () => import('./basic-tabs/basic-tabs.component').then(c => c.BasicTabsExampleComponent),
  },
  {
    id: 'custom-select-tabs',
    component: () => import('./custom-select-tabs/custom-select-tabs.component').then(c => c.CustomSelectTabsExampleComponent),
  },
  {
    id: 'disabled-tabs',
    component: () => import('./disabled-tabs/disabled-tabs.component').then(c => c.DisabledTabsExampleComponent),
  },
  {
    id: 'initially-select-tab',
    component: () => import('./initially-select-tab/initially-select-tab.component').then(c => c.InitiallySelectTabExampleComponent),
  },
  {
    id: 'link-tabs',
    component: () => import('./link-tabs/link-tabs.component').then(c => c.LinkTabsExampleComponent),
  },
));

