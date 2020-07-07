import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[daffMessageBarDismissal]'
})

export class DaffMessageBarDismissalDirective {

  @HostBinding('class.daff-message-bar__dismissal') class = true;
}
