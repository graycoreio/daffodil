/* eslint-disable quote-props */
import { Directive } from '@angular/core';

/**
 * Tagline is a short, memorable phrase that complements the title and provides quick context.
 *
 * @example
 * ```html
 * <div daffHeroTagline>Limited Time Offer</div>
 * ```
 */
@Directive({
  selector: '[daffHeroTagline]',
  host: {
    'class': 'daff-hero__tagline',
  },
})

export class DaffHeroTaglineDirective {}
