import { makeEnvironmentProviders } from '@angular/core';

import { provideDaffDocsExampleContent } from '@daffodil/docs';

export const provideDaffDesignSwitchExamplesContent = () => makeEnvironmentProviders(provideDaffDocsExampleContent(
  {
    id: 'basic-switch',
    component: () => import('./basic-switch/basic-switch.component').then(c => c.BasicSwitchExampleComponent),
  },
  {
    id: 'checked-switch',
    component: () => import('./checked-switch/checked-switch.component').then(c => c.CheckedSwitchExampleComponent),
  },
  {
    id: 'disabled-switch',
    component: () => import('./disabled-switch/disabled-switch.component').then(c => c.DisabledSwitchExampleComponent),
  },
  {
    id: 'switch-label-positions',
    component: () => import('./switch-label-positions/switch-label-positions.component').then(c => c.SwitchLabelPositionsExampleComponent),
  },
  {
    id: 'switch-sizes',
    component: () => import('./switch-sizes/switch-sizes.component').then(c => c.SwitchSizesExampleComponent),
  },
));

