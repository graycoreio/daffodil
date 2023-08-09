import {
  Directive,
  HostBinding,
} from '@angular/core';

@Directive({
  selector: '[daffToastMessage]',
})

export class DaffToastMessageDirective {

  @HostBinding('class.daff-toast__message') class = true;
}
