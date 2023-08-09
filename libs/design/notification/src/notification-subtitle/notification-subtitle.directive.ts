import {
  Directive,
  HostBinding,
} from '@angular/core';

@Directive({
  selector: '[daffNotificationSubtitle]',
})

export class DaffNotificationSubtitleDirective {

  @HostBinding('class.daff-notification__subtitle') class = true;
}
