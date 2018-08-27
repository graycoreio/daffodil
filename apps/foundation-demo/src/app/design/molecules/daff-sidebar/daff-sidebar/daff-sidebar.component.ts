import { Component, ViewEncapsulation, Input, HostBinding } from '@angular/core';

@Component({
  selector: '[daff-sidebar]',
  styleUrls: ['./daff-sidebar.component.scss'],
  host: {'class': 'daff-sidebar'},
  template: '<ng-content></ng-content>',
  encapsulation: ViewEncapsulation.None
})
export class DaffSidebarComponent {

  @Input() show: boolean;

  @HostBinding('class.daff-sidebar-show')
  public get showSidebar(): boolean {
    return this.show;
  }
  @HostBinding('class.daff-sidebar-hide')
  public get hideSidebar(): boolean {
    return !this.show;
  }
}