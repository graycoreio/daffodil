import { makeEnvironmentProviders } from '@angular/core';

import { provideDaffDocsExampleContent } from '@daffodil/docs';

export const provideDaffDesignSelectExamplesContent = () => makeEnvironmentProviders(provideDaffDocsExampleContent(
  {
    id: 'basic-select',
    component: () => import('./basic-select/basic-select.component').then(c => c.BasicSelectExampleComponent),
  },
  {
    id: 'disabled-select',
    component: () => import('./disabled-select/disabled-select.component').then(c => c.DisabledSelectExampleComponent),
  },
  {
    id: 'select-with-error',
    component: () => import('./select-with-error/select-with-error.component').then(c => c.SelectWithErrorExampleComponent),
  },
  {
    id: 'select-with-hint',
    component: () => import('./select-with-hint/select-with-hint.component').then(c => c.SelectWithHintExampleComponent),
  },
  {
    id: 'skeleton-select',
    component: () => import('./skeleton-select/skeleton-select.component').then(c => c.SkeletonSelectExampleComponent),
  },
));

