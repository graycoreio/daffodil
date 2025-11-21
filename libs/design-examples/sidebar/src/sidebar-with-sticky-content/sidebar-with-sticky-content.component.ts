import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

import { DAFF_SIDEBAR_COMPONENTS } from '@daffodil/design/sidebar';

@Component({
  selector: 'sidebar-with-sticky-content-example',
  templateUrl: './sidebar-with-sticky-content.component.html',
  styleUrls: ['sidebar-with-sticky-content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DAFF_SIDEBAR_COMPONENTS,
  ],
})
export class SidebarWithStickyContentExampleComponent {}
