/* eslint-disable quote-props */
import { Directive } from '@angular/core';

/**
 * Title is the primary heading for the hero.
 *
 * @example
 * ```html
 * <h1 daffHeroTitle>Summer Collection Sale</h1>
 * ```
 */
@Directive({
  selector: '[daffHeroTitle]',
  host: {
    'class': 'daff-hero__title',
  },
})

export class DaffHeroTitleDirective {}
