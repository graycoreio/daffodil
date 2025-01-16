import {
  Directive,
  HostBinding,
} from '@angular/core';

@Directive({
  selector: '[daffFormLabel]',
  standalone: false,
})
export class DaffFormLabelDirective {
  @HostBinding('class.daff-form-label') class = true;
}
