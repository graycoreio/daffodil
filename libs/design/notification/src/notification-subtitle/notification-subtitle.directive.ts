import {
  Directive,
  HostBinding,
} from '@angular/core';

@Directive({
  selector: '[daffNotificationSubtitle]',
  standalone: true,
})

export class DaffNotificationSubtitleDirective {

  @HostBinding('class.daff-notification__subtitle') class = true;
}
