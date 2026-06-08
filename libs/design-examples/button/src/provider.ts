import { makeEnvironmentProviders } from '@angular/core';

import { provideDaffDocsExampleContent } from '@daffodil/docs';

export const provideDaffDesignButtonExamplesContent = () => makeEnvironmentProviders(provideDaffDocsExampleContent(
  {
    id: 'elevated-button',
    component: () => import('./elevated-button/elevated-button.component').then(c => c.ElevatedButtonExampleComponent),
  },
  {
    id: 'statusable-button',
    component: () => import('./statusable-button/statusable-button.component').then(c => c.StatusableButtonExampleComponent),
  },
  {
    id: 'button-sizes',
    component: () => import('./button-sizes/button-sizes.component').then(c => c.ButtonSizesExampleComponent),
  },
  {
    id: 'loading-button',
    component: () => import('./loading-button/loading-button.component').then(c => c.LoadingButtonExampleComponent),
  },
  {
    id: 'disabled-button',
    component: () => import('./disabled-button/disabled-button.component').then(c => c.DisabledButtonExampleComponent),
  },
  {
    id: 'button-with-icon',
    component: () => import('./button-with-icon/button-with-icon.component').then(c => c.ButtonWithIconExampleComponent),
  },
  {
    id: 'button-types',
    component: () => import('./button-types/button-types.component').then(c => c.ButtonTypesExampleComponent),
  },
  {
    id: 'button-colors',
    component: () => import('./button-colors/button-colors.component').then(c => c.ButtonColorsExampleComponent),
  },
));

