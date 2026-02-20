import { makeEnvironmentProviders } from '@angular/core';

import { provideDaffDocsExampleContent } from '@daffodil/docs';

export const provideDaffDesignProgressBarExamplesContent = () => makeEnvironmentProviders(provideDaffDocsExampleContent(
  {
    id: 'progress-bar-default',
    component: () => import('./progress-bar-default/progress-bar-default.component').then(c => c.ProgressBarDefaultExampleComponent),
  },
  {
    id: 'progress-bar-indeterminate',
    component: () => import('./progress-bar-indeterminate/progress-bar-indeterminate.component').then(c => c.ProgressBarIndeterminateExampleComponent),
  },
  {
    id: 'progress-bar-themes',
    component: () => import('./progress-bar-themes/progress-bar-themes.component').then(c => c.ProgressBarThemesExampleComponent),
  },
));

