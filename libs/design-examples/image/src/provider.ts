import { makeEnvironmentProviders } from '@angular/core';

import { provideDaffDocsExampleContent } from '@daffodil/docs';

export const provideDaffDesignImageExamplesContent = () => makeEnvironmentProviders(provideDaffDocsExampleContent(
  {
    id: 'basic-image',
    component: () => import('./basic-image/basic-image.component').then(c => c.BasicImageExampleComponent),
  },
  {
    id: 'load-image',
    component: () => import('./load-image/load-image.component').then(c => c.LoadImageExampleComponent),
  },
  {
    id: 'skeleton-image',
    component: () => import('./skeleton-image/skeleton-image.component').then(c => c.SkeletonImageExampleComponent),
  },
));

