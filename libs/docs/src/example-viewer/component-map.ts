import {
  inject,
  InjectionToken,
} from '@angular/core';

import { DAFF_DOCS_EXAMPLE_CONTENT } from '../example/content.token';
import { DaffDocsExampleContent } from '../example/content.type';

/**
 * Injection token that provides a map of example component identifiers to their
 * lazy-loaded component factories. Used by {@link DaffDocsExampleViewerComponent}
 * to dynamically load and render example components within documentation content.
 *
 * Each entry maps a string identifier (used in documentation markup) to a factory
 * function that returns a Promise resolving to the component type.
 */
export const DAFF_DOCS_EXAMPLES_CONTENT_COMPONENT_MAP = new InjectionToken<Map<string, DaffDocsExampleContent['component']>>('DAFF_DOCS_EXAMPLES_CONTENT_COMPONENT_MAP', {
  providedIn: 'any',
  factory: () => inject(DAFF_DOCS_EXAMPLE_CONTENT).reduce(
    (acc, { id, component }) => {
      if (acc.has(id)) {
        console.warn(`Collision for example content ID: ${id}, overwriting.`);
      }
      acc.set(id, component);
      return acc;
    },
    new Map(),
  ),
});
