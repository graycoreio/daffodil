import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'input[daff-input] ',
  template: '<ng-content></ng-content>',
  styleUrls: ['./input.component.scss'],
  host: {
    'class': 'daff-input'
  },
  encapsulation: ViewEncapsulation.None,
})
export class DaffInputComponent {}
