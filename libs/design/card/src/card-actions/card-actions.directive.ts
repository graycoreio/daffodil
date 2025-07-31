/* eslint-disable quote-props */
import { Directive } from '@angular/core';

/**
 * A container for buttons or calls-to-action, always positioned to the bottom of the card.
 *
 * @example
 * ```html
 * <div daffCardActions></div>
 * ```
 */
@Directive({
  selector: '[daffCardActions]',
  host: {
    'class': 'daff-card__actions',
  },
})
export class DaffCardActionsDirective {}
