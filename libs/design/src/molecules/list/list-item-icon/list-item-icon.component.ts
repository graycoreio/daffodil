import { Component } from '@angular/core';

@Component ({
  selector: '[daff-list-item-icon]',
  template: '<ng-content></ng-content>',
  host: {'class': 'daff-list-item__icon'}
})

export class DaffListItemIconComponent {}
