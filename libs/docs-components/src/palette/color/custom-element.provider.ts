import {
  ENVIRONMENT_INITIALIZER,
  FactoryProvider,
  inject,
  reflectComponentType,
} from '@angular/core';

import { DaffCustomElements } from '@daffodil/core/elements';

import { DaffDocsColorPalettesComponent } from './color.component';

export const provideDaffDocsColorPalettesComponentCustomElement = (): FactoryProvider => ({
  provide: ENVIRONMENT_INITIALIZER,
  useFactory: () => {
    const customElements = inject(DaffCustomElements);
    return () => {
      customElements.create(
        `${reflectComponentType(DaffDocsColorPalettesComponent).selector}-ce`,
        DaffDocsColorPalettesComponent,
      );
    };
  },
  multi: true,
});
