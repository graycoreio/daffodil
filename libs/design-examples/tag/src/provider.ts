import { makeEnvironmentProviders } from '@angular/core';

import { provideDaffDocsExampleContent } from '@daffodil/docs';

export const provideDaffDesignTagExamplesContent = () => makeEnvironmentProviders(provideDaffDocsExampleContent(
  {
    id: 'basic-tag',
    component: () => import('./basic-tag/basic-tag.component').then(c => c.BasicTagExampleComponent),
  },
  {
    id: 'colorable-tag',
    component: () => import('./colorable-tag/colorable-tag.component').then(c => c.ColorableTagExampleComponent),
  },
  {
    id: 'disabled-tag',
    component: () => import('./disabled-tag/disabled-tag.component').then(c => c.DisabledTagExampleComponent),
  },
  {
    id: 'dismissible-tag',
    component: () => import('./dismissible-tag/dismissible-tag.component').then(c => c.DismissibleTagExampleComponent),
  },
  {
    id: 'sizable-tag',
    component: () => import('./sizable-tag/sizable-tag.component').then(c => c.SizableTagExampleComponent),
  },
  {
    id: 'statusable-tag',
    component: () => import('./statusable-tag/statusable-tag.component').then(c => c.StatusableTagExampleComponent),
  },
));

