import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[daffFormLabel]'
})

export class DaffFormLabelDirective {

  @HostBinding('class.daff-form-label') class = true;

}
