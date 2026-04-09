import { makeEnvironmentProviders } from '@angular/core';

import { provideDaffDocsExampleContent } from '@daffodil/docs';

export const provideDaffDesignArticleEncapsulatedExamplesContent = () => makeEnvironmentProviders(provideDaffDocsExampleContent(
  {
    id: 'basic-article-encapsulated',
    component: () => import('./basic-article-encapsulated/basic-article-encapsulated.component').then(c => c.BasicArticleEncapsulatedExampleComponent),
  },
));
