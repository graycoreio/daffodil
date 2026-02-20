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
    id: 'raised-button',
    component: () => import('./raised-button/raised-button.component').then(c => c.RaisedButtonExampleComponent),
  },
  {
    id: 'sizable-button',
    component: () => import('./sizable-button/sizable-button.component').then(c => c.SizeableButtonExampleComponent),
  },
  {
    id: 'statusable-button',
    component: () => import('./statusable-button/statusable-button.component').then(c => c.StatusableButtonExampleComponent),
  },
  {
    id: 'stroked-button',
    component: () => import('./stroked-button/stroked-button.component').then(c => c.StrokedButtonExampleComponent),
  },
));

