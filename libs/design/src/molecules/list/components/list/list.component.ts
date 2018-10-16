import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: '[daff-list]',
  template: '<ng-content></ng-content>',
  styleUrls: ['./list.component.scss'],
  host: {'class': 'daff-list'},
  encapsulation: ViewEncapsulation.None
})
export class DaffListComponent {}
