/* eslint-disable quote-props */
import { Directive } from '@angular/core';

/**
 * @deprecated in favor of DaffNotificationMessageDirective.
 */
@Directive({
  selector: '[daffNotificationSubtitle]',
  host: {
    'class': 'daff-notification__subtitle',
  },
})

export class DaffNotificationSubtitleDirective {}
