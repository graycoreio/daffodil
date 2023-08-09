import {
  Directive,
  HostBinding,
} from '@angular/core';

@Directive({
  selector: '[daffNotificationActions]',
})

export class DaffNotificationActionsDirective {

  @HostBinding('class.daff-notification__actions') class = true;
}
