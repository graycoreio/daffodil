import {
  Component,
  HostBinding,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'daff-sidebar-footer',
  template: '<ng-content></ng-content>',
  styleUrls: ['./sidebar-footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DaffSidebarFooterComponent {
  @HostBinding('class.daff-sidebar-footer') class = true;
}
