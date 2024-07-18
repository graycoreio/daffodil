import {
  ɵcreateInjector,
  Injector,
} from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { ComponentExample } from '@daffodil/design';

/**
 * Creates a custom element from a Component Example to be used to render complex
 * component examples in the docs.
 */
export const createCustomElementFromExample = (example: ComponentExample, injector: Injector) => {
  if(typeof example === 'function'){
    return {
      element: createCustomElement(example, { injector }),
      class: example,
    };
  } else {
    return {
      element: createCustomElement(example.component, { injector: ɵcreateInjector(example.module, injector) }),
      class: example.component,
    };
  }
};

