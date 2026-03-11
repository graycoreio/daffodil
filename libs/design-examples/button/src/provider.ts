import { makeEnvironmentProviders } from '@angular/core';

import { provideDaffDocsExampleContent } from '@daffodil/docs';

export const provideDaffDesignButtonExamplesContent = () => makeEnvironmentProviders(provideDaffDocsExampleContent(
  {
    id: 'basic-button',
    component: () => import('./basic-button/basic-button.component').then(c => c.BasicButtonExampleComponent),
  },
  {
    id: 'elevated-button',
    component: () => import('./elevated-button/elevated-button.component').then(c => c.ElevatedButtonExampleComponent),
  },
  {
    id: 'flat-button',
    component: () => import('./flat-button/flat-button.component').then(c => c.FlatButtonExampleComponent),
  },
  {
    id: 'icon-button',
    component: () => import('./icon-button/icon-button.component').then(c => c.IconButtonExampleComponent),
  },
  {
    id: 'statusable-button',
    component: () => import('./statusable-button/statusable-button.component').then(c => c.StatusableButtonExampleComponent),
  },
  {
    id: 'stroked-button',
    component: () => import('./stroked-button/stroked-button.component').then(c => c.StrokedButtonExampleComponent),
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
));

