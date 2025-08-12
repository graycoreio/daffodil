/* eslint-disable quote-props */
import { Directive } from '@angular/core';

/**
 * Icon is used to display a visual or branding element. Avoid using this for interactive or actionable icons.
 *
 * @example
 * ```html
 * <div daffHeroIcon>
 *  <img src="assets/summer-sale-icon.svg" alt="Summer sale icon" />
  </div>
 * ```
 */
@Directive({
  selector: '[daffHeroIcon]',
  host: {
    'class': 'daff-hero__icon',
  },
})

export class DaffHeroIconDirective {}
