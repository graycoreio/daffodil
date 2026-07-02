import { makeEnvironmentProviders } from '@angular/core';

import { provideDaffDocsExampleContent } from '@daffodil/docs';

export const provideDaffDesignBeaconExamplesContent = () => makeEnvironmentProviders(provideDaffDocsExampleContent(
  {
    id: 'beacon-colors',
    component: () => import('./beacon-colors/beacon-colors.component').then(c => c.BeaconColorsExampleComponent),
  },
  {
    id: 'beacon-sizes',
    component: () => import('./beacon-sizes/beacon-sizes.component').then(c => c.BeaconSizesExampleComponent),
  },
  {
    id: 'beacon-speeds',
    component: () => import('./beacon-speeds/beacon-speeds.component').then(c => c.BeaconSpeedsExampleComponent),
  },
  {
    id: 'beacon-statuses',
    component: () => import('./beacon-statuses/beacon-statuses.component').then(c => c.BeaconStatusesExampleComponent),
  },
  {
    id: 'basic-beacon',
    component: () => import('./basic-beacon/basic-beacon.component').then(c => c.BasicBeaconExampleComponent),
  },
));

