import { Component } from '@angular/core';

@Component({
  // todo refactor to directive
  // tslint:disable-next-line: component-selector
  selector: '[daffio-header-item]',
  styleUrls: ['./header-item.component.scss'],
  template: '<ng-content></ng-content>'
})
export class DaffioHeaderItemComponent{ }
