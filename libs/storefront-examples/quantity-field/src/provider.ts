import { makeEnvironmentProviders } from '@angular/core';

import { provideDaffDocsExampleContent } from '@daffodil/docs';

export const provideDaffStorefrontQuantityFieldExamplesContent = () => makeEnvironmentProviders(provideDaffDocsExampleContent(
  {
    id: 'basic-quantity-field',
    component: () => import('./basic-quantity-field/basic-quantity-field.component').then(c => c.BasicQuantityFieldExampleComponent),
  },
  {
    id: 'custom-range-quantity-field',
    component: () => import('./custom-range-quantity-field/custom-range-quantity-field.component').then(c => c.CustomRangeQuantityFieldExampleComponent),
  },
  {
    id: 'disabled-quantity-field',
    component: () => import('./disabled-quantity-field/disabled-quantity-field.component').then(c => c.DisabledQuantityFieldExampleComponent),
  },
  {
    id: 'select-max-quantity-field',
    component: () => import('./select-max-quantity-field/select-max-quantity-field.component').then(c => c.SelectMaxQuantityFieldExampleComponent),
  },
));

