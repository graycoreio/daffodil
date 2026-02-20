import { makeEnvironmentProviders } from '@angular/core';

import { provideDaffDocsExampleContent } from '@daffodil/docs';

export const provideDaffDesignTextareaExamplesContent = () => makeEnvironmentProviders(provideDaffDocsExampleContent(
  {
    id: 'basic-textarea',
    component: () => import('./basic-textarea/basic-textarea.component').then(c => c.BasicTextareaExampleComponent),
  },
  {
    id: 'textarea-disabled',
    component: () => import('./textarea-disabled/textarea-disabled.component').then(c => c.TextareaDisabledExampleComponent),
  },
  {
    id: 'textarea-error',
    component: () => import('./textarea-error/textarea-error.component').then(c => c.TextareaErrorExampleComponent),
  },
  {
    id: 'textarea-hint',
    component: () => import('./textarea-hint/textarea-hint.component').then(c => c.TextareaHintExampleComponent),
  },
));

