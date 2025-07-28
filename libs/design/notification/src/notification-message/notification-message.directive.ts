/* eslint-disable quote-props */
import { Directive } from '@angular/core';

@Directive({
  selector: '[daffNotificationMessage]',
  host: {
    'class': 'daff-notification__message',
  },
})

export class DaffNotificationMessageDirective {}
