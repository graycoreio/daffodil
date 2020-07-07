import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[daffMessageBarMessage]'
})

export class DaffMessageBarMessageDirective {

  @HostBinding('class.daff-message-bar__message') class = true;
}
