/* eslint-disable quote-props */
import { Directive } from '@angular/core';

/**
 * Title is the primary text summarizing the notification.
 *
 * @example
 * ```html
 * <div daffNotificationTitle>Payment Failed</div>
 * ```
 */
@Directive({
  selector: '[daffNotificationTitle]',
  host: {
    'class': 'daff-notification__title',
  },
})

export class DaffNotificationTitleDirective {}
