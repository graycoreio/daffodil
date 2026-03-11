import { makeEnvironmentProviders } from '@angular/core';

import { provideDaffDocsExampleContent } from '@daffodil/docs';

export const provideDaffioColorPaletteGeneratorExampleContent = () =>
  makeEnvironmentProviders(
    provideDaffDocsExampleContent({
      id: 'color-palette-generator',
      component: () =>
        import('@daffodil/docs').then(
          (c) => c.DaffDocsColorPaletteGeneratorComponent,
        ),
    }),
  );
