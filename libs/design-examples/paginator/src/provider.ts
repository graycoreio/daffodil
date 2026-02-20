import { makeEnvironmentProviders } from '@angular/core';

import { provideDaffDocsExampleContent } from '@daffodil/docs';

export const provideDaffDesignPaginatorExamplesContent = () => makeEnvironmentProviders(provideDaffDocsExampleContent(
  {
    id: 'basic-paginator',
    component: () => import('./basic-paginator/basic-paginator.component').then(c => c.BasicPaginatorExampleComponent),
  },
  {
    id: 'link-paginator',
    component: () => import('./link-paginator/link-paginator.component').then(c => c.LinkPaginatorExampleComponent),
  },
));

