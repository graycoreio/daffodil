import {
  InjectionToken,
  Type,
} from '@angular/core';

/**
 * Injection token that provides a map of example component identifiers to their
 * lazy-loaded component factories. Used by {@link DaffioExampleViewerComponent}
 * to dynamically load and render example components within documentation content.
 *
 * Each entry maps a string identifier (used in documentation markup) to a factory
 * function that returns a Promise resolving to the component type.
 */
export const CONTENT_COMPONENT_MAP = new InjectionToken<Map<string, () => Promise<Type<any>>>>('CONTENT_COMPONENT_MAP', {
  providedIn: 'root',
  factory: () => new Map([
    ['initially-expanded-accordion', () => import('@daffodil/design-examples/accordion').then(c => c.DisabledAccordionExampleComponent)],
    ['color-palettes', () => import('../../design/containers/color-palettes/palettes.component').then(c => c.DaffioColorPalettesComponent)],
  ]),
});
