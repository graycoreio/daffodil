/* eslint-disable quote-props */
import { Directive } from '@angular/core';

/**
 * The primary heading of the card.
 *
 * @example
 * ```html
 * <div daffCardTitle></div>
 * ```
 */
@Directive({
  selector: '[daffCardTitle]',
  host: {
    'class': 'daff-card__title',
  },
})
export class DaffCardTitleDirective {}
