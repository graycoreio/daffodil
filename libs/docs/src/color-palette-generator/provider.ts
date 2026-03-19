import { makeEnvironmentProviders } from '@angular/core';

import { provideDaffDocsExampleContent } from '../example/public_api';

export const provideDaffDocsColorPaletteGeneratorExampleContent = () =>
  makeEnvironmentProviders(
    provideDaffDocsExampleContent({
      id: 'color-palette-generator',
      component: () =>
        import('./color-palette-generator/color-palette-generator.component').then(
          (c) => c.DaffDocsColorPaletteGeneratorComponent,
        ),
    }),
  );
