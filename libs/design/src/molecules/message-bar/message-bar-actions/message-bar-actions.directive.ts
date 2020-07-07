import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[daffMessageBarActions]'
})

export class DaffMessageBarActionsDirective {

  @HostBinding('class.daff-message-bar__actions') class = true;
}
