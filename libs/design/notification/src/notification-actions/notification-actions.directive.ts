import {
  Directive,
  HostBinding,
} from '@angular/core';

@Directive({
  selector: '[daffNotificationActions]',
  standalone: true,
})

export class DaffNotificationActionsDirective {

  @HostBinding('class.daff-notification__actions') class = true;
}
