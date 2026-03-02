import { makeEnvironmentProviders } from '@angular/core';

import { provideDaffDocsExampleContent } from '@daffodil/docs';

export const provideDaffDesignCheckboxExamplesContent = () => makeEnvironmentProviders(provideDaffDocsExampleContent(
  {
    id: 'basic-checkbox',
    component: () => import('./basic-checkbox/basic-checkbox.component').then(c => c.BasicCheckboxExampleComponent),
  },
  {
    id: 'checkbox-set',
    component: () => import('./checkbox-set/checkbox-set.component').then(c => c.CheckboxSetExampleComponent),
  },
));

