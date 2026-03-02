import { makeEnvironmentProviders } from '@angular/core';

import { provideDaffDocsExampleContent } from '@daffodil/docs';

export const provideDaffDesignLoadingIconExamplesContent = () => makeEnvironmentProviders(provideDaffDocsExampleContent(
  {
    id: 'loading-icon-color',
    component: () => import('./loading-icon-color/loading-icon-color.component').then(c => c.LoadingIconColorExampleComponent),
  },
));

