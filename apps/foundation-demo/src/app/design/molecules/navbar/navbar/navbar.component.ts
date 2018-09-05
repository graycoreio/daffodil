import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'daff-navbar',
  styleUrls: ['./navbar.component.scss'],
  host: {'class': 'daff-navbar'},
  template: '<ng-content></ng-content>',
  encapsulation: ViewEncapsulation.None
})
export class DaffNavbarComponent {}
