import { DOCUMENT } from '@angular/common';
import {
  ENVIRONMENT_INITIALIZER,
  FactoryProvider,
  inject,
  Injector,
  reflectComponentType,
} from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { DaffDocsExampleViewerContainer } from './example-viewer.component';

export const provideDaffDocsExampleViewerContainerCustomElement = (): FactoryProvider => ({
  provide: ENVIRONMENT_INITIALIZER,
  useFactory: () => {
    const document: Document = inject(DOCUMENT);
    const injector = inject(Injector);
    return () => {
      const tag = `${reflectComponentType(DaffDocsExampleViewerContainer).selector}-ce`;
      // check if tag already exists, environment initializers can be run more than once
      if (document.defaultView.customElements && !document.defaultView.customElements.get(tag)) {
        document.defaultView.customElements.define(
          tag,
          createCustomElement(DaffDocsExampleViewerContainer, { injector }),
        );
      }
    };
  },
  multi: true,
});
