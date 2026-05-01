import { makeEnvironmentProviders } from '@angular/core';

import { provideDaffDocsExampleContent } from '@daffodil/docs';

export const provideDaffDesignFormFieldExamplesContent = () => makeEnvironmentProviders(provideDaffDocsExampleContent(
  {
    id: 'form-field-appearances',
    component: () => import('./form-field-appearances/form-field-appearances.component').then(c => c.FormFieldAppearancesExampleComponent),
  },
  {
    id: 'form-field-with-action',
    component: () => import('./form-field-with-action/form-field-with-action.component').then(c => c.FormFieldWithActionExampleComponent),
  },
  {
    id: 'form-field-with-prefix',
    component: () => import('./form-field-with-prefix/form-field-with-prefix.component').then(c => c.FormFieldWithPrefixExampleComponent),
  },
  {
    id: 'form-field-with-suffix',
    component: () => import('./form-field-with-suffix/form-field-with-suffix.component').then(c => c.FormFieldWithSuffixExampleComponent),
  },
  {
    id: 'form-field-validated-hint',
    component: () => import('./form-field-validated-hint/form-field-validated-hint.component').then(c => c.FormFieldValidatedHintExampleComponent),
  },
));

