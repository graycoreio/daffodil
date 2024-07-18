import {
  ENVIRONMENT_INITIALIZER,
  FactoryProvider,
  inject,
  reflectComponentType,
} from '@angular/core';

import { DaffCustomElements } from '@daffodil/core/elements';

import { DaffDocsExampleViewerContainer } from './example-viewer.component';

export const provideDaffDocsExampleViewerContainerCustomElement = (): FactoryProvider => ({
  provide: ENVIRONMENT_INITIALIZER,
  useFactory: () => {
    const customElements = inject(DaffCustomElements);
    return () => {
      customElements.create(
        `${reflectComponentType(DaffDocsExampleViewerContainer).selector}-ce`,
        DaffDocsExampleViewerContainer,
      );
    };
  },
  multi: true,
});
