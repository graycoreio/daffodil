import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'daff-button-set',
  template: '<ng-content></ng-content>',
  styleUrls: ['./button-set.component.scss'],
  host: {
    'class': 'daff-button-set'
  },
  encapsulation: ViewEncapsulation.None
})
export class DaffButtonSetComponent {}
