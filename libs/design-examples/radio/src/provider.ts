import { makeEnvironmentProviders } from '@angular/core';

import { provideDaffDocsExampleContent } from '@daffodil/docs';

export const provideDaffDesignRadioExamplesContent = () => makeEnvironmentProviders(provideDaffDocsExampleContent(
  {
    id: 'basic-radio',
    component: () => import('./basic-radio/basic-radio.component').then(c => c.BasicRadioExampleComponent),
  },
));

