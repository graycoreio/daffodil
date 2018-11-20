import { Component } from '@angular/core';

@Component({
  selector: '[daffio-header-item]',
  host: {'class': 'daffio-header__item'},
  template: '<ng-content></ng-content>'
})
export class DaffioHeaderItemComponent{ }
