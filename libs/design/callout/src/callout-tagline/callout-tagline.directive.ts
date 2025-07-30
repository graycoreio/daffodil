/* eslint-disable quote-props */
import { Directive } from '@angular/core';

/**
 * A short, memorable phrase that complements the title and provides quick context.
 *
 * @example
 * ```html
 * <div daffCalloutTagline></div>
 * ```
 */
@Directive({
  selector: '[daffCalloutTagline]',
  host: {
    'class': 'daff-callout__tagline',
  },
})

export class DaffCalloutTaglineDirective {}
