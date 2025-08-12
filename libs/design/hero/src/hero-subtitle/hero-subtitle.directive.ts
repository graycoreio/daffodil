/* eslint-disable quote-props */
import { Directive } from '@angular/core';

/**
 * Subtitle is a secondary descriptive text displayed beneath the title.
 *
 * @example
 * ```html
 * <p daffHeroSubtitle>Up to 50% off select items through July 31</p>
 * ```
 */
@Directive({
  selector: '[daffHeroSubtitle]',
  host: {
    'class': 'daff-hero__subtitle',
  },
})

export class DaffHeroSubtitleDirective {}
