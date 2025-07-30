import { Directive } from '@angular/core';

/**
 * Secondary text that provides additional descriptive information beneath the title.
 *
 * @example
 * ```html
 * <p daffCalloutSubtitle></p>
 * ```
 */
@Directive({
  selector: '[daffCalloutSubtitle]',
  host: {
    class: 'daff-callout__subtitle',
  },
})

export class DaffCalloutSubtitleDirective {}
