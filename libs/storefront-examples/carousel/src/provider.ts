import { makeEnvironmentProviders } from '@angular/core';

import { provideDaffDocsExampleContent } from '@daffodil/docs';

export const provideDaffStorefrontCarouselExamplesContent = () => makeEnvironmentProviders(provideDaffDocsExampleContent(
  {
    id: 'basic-carousel',
    component: () => import('./basic-carousel/basic-carousel.component').then(c => c.BasicCarouselStorefrontExampleComponent),
  },
));

