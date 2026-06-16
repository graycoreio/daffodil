import { makeEnvironmentProviders } from '@angular/core';

import { provideDaffDocsExampleContent } from '@daffodil/docs';

export const provideDaffDesignSpinnerExamplesContent = () => makeEnvironmentProviders(provideDaffDocsExampleContent(
  {
    id: 'spinner-colors',
    component: () => import('./spinner-colors/spinner-colors.component').then(c => c.SpinnerColorsExampleComponent),
  },
  {
    id: 'spinner-sizes',
    component: () => import('./spinner-sizes/spinner-sizes.component').then(c => c.SpinnerSizesExampleComponent),
  },
  {
    id: 'basic-spinner',
    component: () => import('./basic-spinner/basic-spinner.component').then(c => c.BasicSpinnerExampleComponent),
  },
));

