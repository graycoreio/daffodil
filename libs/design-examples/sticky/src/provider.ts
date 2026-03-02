import { makeEnvironmentProviders } from '@angular/core';

import { provideDaffDocsExampleContent } from '@daffodil/docs';

export const provideDaffDesignStickyExamplesContent = () => makeEnvironmentProviders(provideDaffDocsExampleContent(
  {
    id: 'basic-sticky',
    component: () => import('./basic-sticky/basic-sticky.component').then(c => c.BasicStickyExampleComponent),
  },
));

