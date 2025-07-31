/* eslint-disable quote-props */
import { Directive } from '@angular/core';

/**
 * Displays an image.
 *
 * @example
 * ```html
 * <div daffCardImage></div>
 * ```
 */
@Directive({
  selector: '[daffCardImage]',
  host: {
    'class': 'daff-card__image',
  },
})
export class DaffCardImageDirective {}
