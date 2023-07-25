import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'sidebar-with-sticky',
  templateUrl: './sidebar-with-sticky.component.html',
  styleUrls: [
    'sidebar-with-sticky.component.scss',
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarWithStickyComponent {

}
