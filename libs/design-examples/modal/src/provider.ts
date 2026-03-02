import { makeEnvironmentProviders } from '@angular/core';

import { provideDaffDocsExampleContent } from '@daffodil/docs';

export const provideDaffDesignModalExamplesContent = () => makeEnvironmentProviders(provideDaffDocsExampleContent(
  {
    id: 'basic-modal',
    component: () => import('./basic-modal/basic-modal.component').then(c => c.BasicModalExampleComponent),
  },
  {
    id: 'position-config-modal',
    component: () => import('./position-config-modal/position-config-modal.component').then(c => c.PositionConfigModalExampleComponent),
  },
));

