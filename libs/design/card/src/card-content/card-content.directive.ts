/* eslint-disable quote-props */
import { Directive } from '@angular/core';

/**
 * A flexible wrapper for text, components, or custom layouts.
 * It's unstyled except for spacing and should only be used once per card.
 *
 * @example
 * ```html
 * <div daffCardContent></div>
 * ```
 */
@Directive({
  selector: '[daffCardContent]',
  host: {
    'class': 'daff-card__content',
  },
})
export class DaffCardContentDirective {}
