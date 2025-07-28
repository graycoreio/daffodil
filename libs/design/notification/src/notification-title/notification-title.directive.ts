/* eslint-disable quote-props */
import { Directive } from '@angular/core';

@Directive({
  selector: '[daffNotificationTitle]',
  host: {
    'class': 'daff-notification__title',
  },
})

export class DaffNotificationTitleDirective {}
