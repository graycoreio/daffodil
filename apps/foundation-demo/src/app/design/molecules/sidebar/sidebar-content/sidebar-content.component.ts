import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'daff-sidebar-content',
  template: '<ng-content></ng-content>',
  host: {
    class: 'daff-sidebar-content',
  },
  encapsulation: ViewEncapsulation.None
})
export class DaffSidebarContentComponent {}
