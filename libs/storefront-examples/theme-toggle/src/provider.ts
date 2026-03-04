import { makeEnvironmentProviders } from '@angular/core';

import { provideDaffDocsExampleContent } from '@daffodil/docs';

export const provideDaffStorefrontThemeToggleExamplesContent = () => makeEnvironmentProviders(provideDaffDocsExampleContent(
  {
    id: 'basic-theme-toggle',
    component: () => import('./basic-theme-toggle/basic-theme-toggle.component').then(c => c.BasicThemeToggleStorefrontExampleComponent),
  },
));

