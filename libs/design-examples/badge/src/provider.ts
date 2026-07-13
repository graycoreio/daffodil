import { makeEnvironmentProviders } from '@angular/core';

import { provideDaffDocsExampleContent } from '@daffodil/docs';

export const provideDaffDesignBadgeExamplesContent = () => makeEnvironmentProviders(provideDaffDocsExampleContent(
  {
    id: 'badge-appearances',
    component: () => import('./badge-appearances/badge-appearances.component').then(c => c.BadgeAppearancesExampleComponent),
  },
  {
    id: 'badge-colors',
    component: () => import('./badge-colors/badge-colors.component').then(c => c.BadgeColorsExampleComponent),
  },
  {
    id: 'badge-prefix',
    component: () => import('./badge-prefix/badge-prefix.component').then(c => c.BadgePrefixExampleComponent),
  },
  {
    id: 'badge-sizes',
    component: () => import('./badge-sizes/badge-sizes.component').then(c => c.BadgeSizesExampleComponent),
  },
  {
    id: 'badge-statuses',
    component: () => import('./badge-statuses/badge-statuses.component').then(c => c.BadgeStatusesExampleComponent),
  },
  {
    id: 'basic-badge',
    component: () => import('./basic-badge/basic-badge.component').then(c => c.BasicBadgeExampleComponent),
  },
));

