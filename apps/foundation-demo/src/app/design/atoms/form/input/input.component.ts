import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: '[daff-input]',
  host: {'class': 'daff-input'},
  template: '<ng-content></ng-content>',
  styleUrls: ['./input.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DaffInputComponent {
}
