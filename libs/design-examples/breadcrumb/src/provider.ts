import { makeEnvironmentProviders } from '@angular/core';

import { provideDaffDocsExampleContent } from '@daffodil/docs';

export const provideDaffDesignBreadcrumbExamplesContent = () => makeEnvironmentProviders(provideDaffDocsExampleContent(
  {
    id: 'basic-breadcrumb',
    component: () => import('./basic-breadcrumb/basic-breadcrumb.component').then(c => c.BasicBreadcrumbExampleComponent),
  },
  {
    id: 'iterated-breadcrumb',
    component: () => import('./iterated-breadcrumb/iterated-breadcrumb.component').then(c => c.IteratedBreadcrumbExampleComponent),
  },
));

