import {
  Directive,
  HostBinding,
} from '@angular/core';

@Directive({
  selector: '[daffioHeaderItem]',
})
export class DaffioHeaderItemDirective {
  @HostBinding('class.daffio-header__item') class = true;
}
