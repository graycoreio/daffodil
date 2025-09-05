/* eslint-disable quote-props */
import { Directive } from '@angular/core';

/**
 * @deprecated in favor of DaffNotificationMessageDirective. Deprecated in version 0.88.0. Will be removed in version 0.91.0.
 */
@Directive({
  selector: '[daffNotificationSubtitle]',
  host: {
    'class': 'daff-notification__subtitle',
  },
})

export class DaffNotificationSubtitleDirective {}
