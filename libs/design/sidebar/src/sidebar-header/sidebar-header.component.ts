import {
  Component,
  HostBinding,
  ChangeDetectionStrategy,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'daff-sidebar-header',
  templateUrl: './sidebar-header.component.html',
  styleUrls: ['./sidebar-header.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,

})
export class DaffSidebarHeaderComponent {
  @HostBinding('class.daff-sidebar-header') class = true;
}
