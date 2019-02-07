import { Directive } from '@angular/core';

@Directive ({
  selector: '[daffListItemIcon]',
  host: {
    'class': 'daff-list-item__icon'
  }
})
export class DaffListItemIconDirective {}
