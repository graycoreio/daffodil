/* eslint-disable quote-props */
import { Directive } from '@angular/core';

/**
 * Displays a visual or branding element. Avoid using this for interactive or actionable icons.
 *
 * @example
 * ```html
 * <div daffCardIcon></div>
 * ```
 */
@Directive({
  selector: '[daffCardIcon]',
  host: {
    'class': 'daff-card__icon',
  },
})
export class DaffCardIconDirective {}
