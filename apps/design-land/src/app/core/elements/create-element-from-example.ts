import {
  Injector,
  Type,
} from '@angular/core';
import { createCustomElement } from '@angular/elements';

/**
 * Creates a custom element from a Component Example to be used to render complex
 * component examples in the docs.
 */
export const createCustomElementFromExample = (example: Type<unknown>, injector: Injector) => ({
  element: createCustomElement(example, { injector }),
  class: example,
});

