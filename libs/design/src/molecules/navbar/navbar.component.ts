import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'daff-navbar',
  styleUrls: ['./navbar.component.scss'],
  template: '<ng-content></ng-content>',
  host: {
    'class': 'daff-navbar'
  },
  encapsulation: ViewEncapsulation.None
})
export class DaffNavbarComponent {}
