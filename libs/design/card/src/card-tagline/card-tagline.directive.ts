/* eslint-disable quote-props */
import { Directive } from '@angular/core';

/**
 * Short, memorable phrase that complements the title and provides quick context.
 *
 * @example
 * ```html
 * <div daffCardTagline></div>
 * ```
 */
@Directive({
  selector: '[daffCardTagline]',
  host: {
    'class': 'daff-card__tagline',
  },
})
export class DaffCardTaglineDirective {}
