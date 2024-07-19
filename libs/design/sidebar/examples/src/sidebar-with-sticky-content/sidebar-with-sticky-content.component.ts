import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

import { DaffSidebarModule } from '@daffodil/design/sidebar';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'sidebar-with-sticky-content',
  templateUrl: './sidebar-with-sticky-content.component.html',
  styleUrls: ['sidebar-with-sticky-content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [DaffSidebarModule],
})
export class SidebarWithStickyContentComponent {}
