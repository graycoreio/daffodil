import { Component } from '@angular/core';

@Component({
  selector: '[daff-sidebar-item]',
  host: {'class': 'daff-sidebar__item'},
  template: '<ng-content></ng-content>'
})
export class DaffSidebarItemComponent {}
