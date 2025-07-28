/* eslint-disable quote-props */
import { Directive } from '@angular/core';

@Directive({
  selector: '[daffNotificationSubtitle]',
  host: {
    'class': 'daff-notification__subtitle',
  },
})

export class DaffNotificationSubtitleDirective {}
