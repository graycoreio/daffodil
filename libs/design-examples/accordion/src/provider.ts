import { makeEnvironmentProviders } from '@angular/core';

import { provideDaffDocsExampleContent } from '@daffodil/docs';

export const provideDaffDesignAccordionExamplesContent = () => makeEnvironmentProviders(provideDaffDocsExampleContent(
  {
    id: 'basic-accordion',
    component: () => import('./basic-accordion/basic-accordion.component').then(c => c.BasicAccordionExampleComponent),
  },
  {
    id: 'disabled-accordion',
    component: () => import('./disabled-accordion/disabled-accordion.component').then(c => c.DisabledAccordionExampleComponent),
  },
  {
    id: 'initially-expanded-accordion',
    component: () => import('./initially-expanded-accordion/initially-expanded-accordion.component').then(c => c.InitiallyExpandedAccordionExampleComponent),
  },
));
