import { makeEnvironmentProviders } from '@angular/core';

import { provideDaffDocsExampleContent } from '@daffodil/docs';

export const provideDaffDesignContainerExamplesContent = () => makeEnvironmentProviders(provideDaffDocsExampleContent(
  {
    id: 'container-sizes',
    component: () => import('./container-sizes/container-sizes.component').then(c => c.ContainerSizesExampleComponent),
  },
));

