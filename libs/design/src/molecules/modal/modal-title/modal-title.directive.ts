import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[daffModalTitle]'
})
export class DaffModalTitleDirective {
  @HostBinding('class.daff-modal-title') class = true;
}
