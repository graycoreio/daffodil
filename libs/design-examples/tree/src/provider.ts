import { makeEnvironmentProviders } from '@angular/core';

import { provideDaffDocsExampleContent } from '@daffodil/docs';

export const provideDaffDesignTreeExamplesContent = () => makeEnvironmentProviders(provideDaffDocsExampleContent(
  {
    id: 'basic-tree',
    component: () => import('./basic-tree/basic-tree.component').then(c => c.BasicTreeExampleComponent),
  },
  {
    id: 'deep-tree',
    component: () => import('./deep-tree/deep-tree.component').then(c => c.DeepTreeExampleComponent),
  },
));

