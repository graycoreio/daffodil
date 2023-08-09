import {
  Directive,
  HostBinding,
} from '@angular/core';

@Directive({
  selector: '[daffNotificationTitle]',
})

export class DaffNotificationTitleDirective {

  @HostBinding('class.daff-notification__title') class = true;
}
