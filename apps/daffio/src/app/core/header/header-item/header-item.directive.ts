import { Directive } from '@angular/core';

@Directive({
  selector: '[daffioHeaderItem]',
  host: {
    'class': 'daffio-header__item'
  }
})
export class DaffioHeaderItemDirective{ }
