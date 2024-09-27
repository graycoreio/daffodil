import {
  Directive,
  HostBinding,
} from '@angular/core';

@Directive({
  selector: '[daffToastMessage]',
  standalone: true,
})

export class DaffToastMessageDirective {

  @HostBinding('class.daff-toast__message') class = true;
}
