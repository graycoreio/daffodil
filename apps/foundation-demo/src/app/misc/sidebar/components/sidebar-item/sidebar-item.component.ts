import { Component } from '@angular/core';

@Component({
  selector: '[sidebar-item]',
  host: {'class': 'sidebar__item'},
  template: '<ng-content></ng-content>'
})
export class SidebarItemComponent {}
