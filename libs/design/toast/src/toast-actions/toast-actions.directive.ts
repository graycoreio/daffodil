import {
  Directive,
  HostBinding,
} from '@angular/core';

@Directive({
  selector: '[daffToastActions]',
  standalone: true,
})

export class DaffToastActionsDirective {

  @HostBinding('class.daff-toast__actions') class = true;
}
