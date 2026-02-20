import { makeEnvironmentProviders } from '@angular/core';

import { provideDaffDocsExampleContent } from '@daffodil/docs';

export const provideDaffDesignInputExamplesContent = () => makeEnvironmentProviders(provideDaffDocsExampleContent(
  {
    id: 'input-disabled',
    component: () => import('./input-disabled/input-disabled.component').then(c => c.InputDisabledExampleComponent),
  },
  {
    id: 'input-error',
    component: () => import('./input-error/input-error.component').then(c => c.InputErrorExampleComponent),
  },
  {
    id: 'input-hint',
    component: () => import('./input-hint/input-hint.component').then(c => c.InputHintExampleComponent),
  },
  {
    id: 'input-hint-and-error',
    component: () => import('./input-hint-and-error/input-hint-and-error.component').then(c => c.InputHintAndErrorExampleComponent),
  },
  {
    id: 'input-with-form-field',
    component: () => import('./input-with-form-field/input-with-form-field.component').then(c => c.InputWithFormFieldExampleComponent),
  },
));

