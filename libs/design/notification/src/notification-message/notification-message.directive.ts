/* eslint-disable quote-props */
import { Directive } from '@angular/core';

/**
 * Message provides additional details or supporting context that supplements
 * the notification title. Keep this brief—ideally one to two short sentences.
 *
 * @example
 * ```html
 * <div daffNotificationMessage>We were unable to process your payment for order #12345. Please update your payment details and try again.</div>
 * ```
 */
@Directive({
  selector: '[daffNotificationMessage]',
  host: {
    'class': 'daff-notification__message',
  },
})

export class DaffNotificationMessageDirective {}
