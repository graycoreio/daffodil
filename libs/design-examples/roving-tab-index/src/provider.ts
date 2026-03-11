import { makeEnvironmentProviders } from '@angular/core';

import { provideDaffDocsExampleContent } from '@daffodil/docs';

export const provideDaffDesignRtiExamplesContent = () => makeEnvironmentProviders(provideDaffDocsExampleContent(
  {
    id: 'rti-nested-groups',
    component: () => import('./rti-nested-groups/nested-groups.component').then(c => c.NestedGroupsRtiExampleComponent),
  },
));

