import { makeEnvironmentProviders } from '@angular/core';

import { provideDaffDocsExampleContent } from '@daffodil/docs';

export const provideDaffDesignCalloutExamplesContent = () => makeEnvironmentProviders(provideDaffDocsExampleContent(
  {
    id: 'callout-text-alignment',
    component: () => import('./callout-text-alignment/callout-text-alignment.component').then(c => c.CalloutTextAlignmentExampleComponent),
  },
  {
    id: 'callout-theming',
    component: () => import('./callout-theming/callout-theming.component').then(c => c.CalloutThemingExampleComponent),
  },
  {
    id: 'callout-with-grid',
    component: () => import('./callout-with-grid/callout-with-grid.component').then(c => c.CalloutWithGridExampleComponent),
  },
  {
    id: 'compact-callout',
    component: () => import('./compact-callout/compact-callout.component').then(c => c.CompactCalloutExampleComponent),
  },
));

