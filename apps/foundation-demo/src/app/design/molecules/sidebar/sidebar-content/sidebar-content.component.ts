import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'daff-sidebar-content',
  template: '<ng-content></ng-content>',
  host: {
    class: 'daff-sidebar__content',
  }
})
export class DaffSidebarContentComponent {}
