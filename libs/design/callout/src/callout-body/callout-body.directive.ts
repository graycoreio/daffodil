/* eslint-disable quote-props */
import { Directive } from '@angular/core';

/**
 * A flexible wrapper for custom or additional components within the callout.
 * It should only be used once per callout.
 *
 * @example
 * ```html
 * <div daffCalloutBody></div>
 * ```
 */
@Directive({
  selector: '[daffCalloutBody]',
  host: {
    'class': 'daff-callout__body',
  },
})

export class DaffCalloutBodyDirective {}
