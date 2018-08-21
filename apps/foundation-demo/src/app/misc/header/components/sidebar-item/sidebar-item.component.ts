import { Component } from '@angular/core';

@Component({
  selector: '[sidebar-item]',
  host: {'class': 'header__sidebar-item'},
  template: '<ng-content></ng-content>'
})
export class SidebarItemComponent {}
