import { makeEnvironmentProviders } from '@angular/core';

import { provideDaffDocsExampleContent } from '@daffodil/docs';

export const provideDaffDesignTextSnippetExamplesContent = () => makeEnvironmentProviders(provideDaffDocsExampleContent(
  {
    id: 'basic-text-snippet',
    component: () => import('./basic-text-snippet/basic-text-snippet.component').then(c => c.BasicTextSnippetExampleComponent),
  },
));

