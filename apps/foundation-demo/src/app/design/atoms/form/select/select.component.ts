import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: '[daff-select]',
  host: {'class': 'daff-select'},
  template: '<ng-content></ng-content>',
  styleUrls: ['./select.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DaffSelectComponent {
}
