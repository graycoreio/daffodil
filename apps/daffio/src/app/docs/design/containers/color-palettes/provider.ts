import { makeEnvironmentProviders } from '@angular/core';

import { provideDaffDocsExampleContent } from '@daffodil/docs';

export const provideDaffioDesignColorPalettesExampleContent = () => makeEnvironmentProviders(provideDaffDocsExampleContent(
  {
    id: 'color-palettes',
    component: () => import('./palettes.component').then(c => c.DaffioColorPalettesComponent),
  },
));
