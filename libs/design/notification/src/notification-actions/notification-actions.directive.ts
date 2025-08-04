/* eslint-disable quote-props */
import { Directive } from '@angular/core';

/**
 * Actions is used to include actionable buttons related to the notification (e.g., dismiss, navigate).
 *
 * @example
 * ```html
 * <div daffNotificationActions>
 *  <button daff-button>Update payment</button>
 *  <button daff-button>Contact support</button>
 * </div>
 * ```
 */
@Directive({
  selector: '[daffNotificationActions]',
  host: {
    'class': 'daff-notification__actions',
  },
})

export class DaffNotificationActionsDirective {}
