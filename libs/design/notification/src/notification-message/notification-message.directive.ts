import {
  Directive,
  HostBinding,
} from '@angular/core';

@Directive({
  selector: '[daffNotificationMessage]',
})

export class DaffNotificationMessageDirective {

  @HostBinding('class.daff-notification__message') class = true;
}
