import { makeEnvironmentProviders } from '@angular/core';

import { provideDaffDocsExampleContent } from '@daffodil/docs';

export const provideDaffDesignHeroExamplesContent = () => makeEnvironmentProviders(provideDaffDocsExampleContent(
  {
    id: 'basic-hero',
    component: () => import('./basic-hero/basic-hero.component').then(c => c.BasicHeroExampleComponent),
  },
  {
    id: 'compact-hero',
    component: () => import('./compact-hero/compact-hero.component').then(c => c.CompactHeroExampleComponent),
  },
  {
    id: 'hero-text-alignment',
    component: () => import('./hero-text-alignment/hero-text-alignment.component').then(c => c.HeroTextAlignmentExampleComponent),
  },
  {
    id: 'hero-theming',
    component: () => import('./hero-theming/hero-theming.component').then(c => c.HeroThemingExampleComponent),
  },
  {
    id: 'hero-with-grid',
    component: () => import('./hero-with-grid/hero-with-grid.component').then(c => c.HeroWithGridExampleComponent),
  },
));

