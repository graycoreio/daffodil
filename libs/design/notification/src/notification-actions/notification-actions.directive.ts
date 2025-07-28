/* eslint-disable quote-props */
import { Directive } from '@angular/core';

@Directive({
  selector: '[daffNotificationActions]',
  host: {
    'class': 'daff-notification__actions',
  },
})

export class DaffNotificationActionsDirective {}
