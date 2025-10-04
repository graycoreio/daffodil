import { isPlatformBrowser } from '@angular/common';
import {
  inject,
  makeEnvironmentProviders,
  provideAppInitializer
  ,
  PLATFORM_ID,
  Injector,
} from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { MarkdownHeadingComponent } from '../../docs/components/heading/heading.component';

interface CustomElementConfig {
  tagName: string;
  component: any;
}

const CUSTOM_ELEMENTS: CustomElementConfig[] = [
  { tagName: 'daffio-ce-heading', component: MarkdownHeadingComponent },
];

/**
 * Configures an Angular application to register all custom elements defined in the CUSTOM_ELEMENTS array.
 *
 * This provider is intended to only be imported exactly once in the root of the application.
 *
 * @example
 * ```ts
 * import { daffCustomElementsProvider } from './providers/custom-elements-provider';
 *
 * bootstrapApplication(AppComponent, {
 *   providers: [
 *     daffCustomElementsProvider(),
 *     // ... other providers
 *   ],
 * });
 * ```
 */
export const provideDaffCustomElements = () => makeEnvironmentProviders([
  provideAppInitializer(() => {
    const platformId = inject(PLATFORM_ID);
    if (isPlatformBrowser(platformId)) {
      CUSTOM_ELEMENTS.forEach(({ tagName, component }) => {
        if (!customElements.get(tagName)) {
          const injector = inject(Injector);
          const elementClass = createCustomElement(component, { injector });
          customElements.define(tagName, elementClass);
        }
      });
    }
  }),
]);
