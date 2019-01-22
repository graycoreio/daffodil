import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component ({
  // tslint:disable-next-line: component-selector
  selector: '[daff-list-item-icon]',
  host: {
    'class': 'daff-list-item__icon'
  },
  template: '<ng-content></ng-content>',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class DaffListItemIconComponent {}
