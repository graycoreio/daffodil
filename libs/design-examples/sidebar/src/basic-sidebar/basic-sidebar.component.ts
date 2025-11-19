import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

import { DAFF_SIDEBAR_COMPONENTS } from '@daffodil/design/sidebar';

@Component({
  selector: 'basic-sidebar-example',
  templateUrl: './basic-sidebar.component.html',
  styleUrls: ['./basic-sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DAFF_SIDEBAR_COMPONENTS,
  ],
})
export class BasicSidebarExampleComponent {}
