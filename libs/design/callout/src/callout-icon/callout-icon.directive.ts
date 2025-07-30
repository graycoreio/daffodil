/* eslint-disable quote-props */
import { Directive } from '@angular/core';

/**
 * Used to display a visual or branding element.
 * Avoid using this for interactive or actionable icons.
 *
 * @example
 * ```html
 * <div daffCalloutIcon></div>
 * ```
 */
@Directive({
  selector: '[daffCalloutIcon]',
  host: {
    'class': 'daff-callout__icon',
  },
})

export class DaffCalloutIconDirective {}
