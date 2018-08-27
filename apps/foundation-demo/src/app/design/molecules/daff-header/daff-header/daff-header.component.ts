import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: '[daff-header]',
  styleUrls: ['./daff-header.component.scss'],
  host: {'class': 'daff-header'},
  template: '<ng-content></ng-content>',
  encapsulation: ViewEncapsulation.None
})
export class DaffHeaderComponent {}
