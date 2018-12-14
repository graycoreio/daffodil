import { Component } from '@angular/core';

@Component({
  selector: '[daff-list-item]',
  template: '<ng-content></ng-content>',
  host: {'class': 'daff-list__item'}
})
export class DaffListItemComponent {}
