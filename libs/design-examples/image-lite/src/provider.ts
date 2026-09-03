import { makeEnvironmentProviders } from '@angular/core';

import { provideDaffDocsExampleContent } from '@daffodil/docs';

export const provideDaffDesignImageLiteExamplesContent = () => makeEnvironmentProviders(provideDaffDocsExampleContent(
  {
    id: 'basic-image-lite',
    component: () => import('./basic-image-lite/basic-image-lite.component').then(c => c.BasicImageLiteExampleComponent),
  },
  {
    id: 'skeleton-image-lite',
    component: () => import('./skeleton-image-lite/skeleton-image-lite.component').then(c => c.SkeletonImageLiteExampleComponent),
  },
));
