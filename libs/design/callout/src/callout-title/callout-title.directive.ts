import { Directive } from '@angular/core';

/**
 * Applied to a heading tag (`<h*>`) to define the primary title of the callout.
 *
 * @example
 * ```html
 * <h2 daffCalloutTitle></h2>
 * ```
 */
@Directive({
  selector: '[daffCalloutTitle]',
  host: {
    class: 'daff-callout__title',
  },
})

export class DaffCalloutTitleDirective {}
