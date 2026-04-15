import { makeEnvironmentProviders } from '@angular/core';

import { provideDaffDocsExampleContent } from '@daffodil/docs';

export const provideDaffDesignCardExamplesContent = () => makeEnvironmentProviders(provideDaffDocsExampleContent(
  {
    id: 'basic-cards',
    component: () => import('./basic-cards/basic-cards.component').then(c => c.BasicCardsExampleComponent),
  },
  {
    id: 'card-orientation',
    component: () => import('./card-orientation/card-orientation.component').then(c => c.CardOrientationExampleComponent),
  },
  {
    id: 'card-theming',
    component: () => import('./card-theming/card-theming.component').then(c => c.CardThemingExampleComponent),
  },
  {
    id: 'elevated-card',
    component: () => import('./elevated-card/elevated-card.component').then(c => c.ElevatedCardExampleComponent),
  },
  {
    id: 'linkable-card',
    component: () => import('./linkable-card/linkable-card.component').then(c => c.LinkableCardExampleComponent),
  },
));

