import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'sidebar-with-sticky-content',
  templateUrl: './sidebar-with-sticky-content.component.html',
  styleUrls: ['sidebar-with-sticky-content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarWithStickyContentComponent {}
