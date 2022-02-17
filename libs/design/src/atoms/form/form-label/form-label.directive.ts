import {
  Directive,
  HostBinding,
  Input,
} from '@angular/core';

@Directive({
  selector: '[daffFormLabel]',
})
export class DaffFormLabelDirective {

  @HostBinding('class.daff-form-label') class = true;

  @Input() for: string;
}
