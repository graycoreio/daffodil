import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

import { DAFF_NAVBAR_COMPONENTS } from '@daffodil/design/navbar';
import { DAFF_SIDEBAR_COMPONENTS } from '@daffodil/design/sidebar';

@Component({
  selector: 'side-fixed-sidebar-example',
  templateUrl: './side-fixed-sidebar.component.html',
  styleUrls: ['side-fixed-sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [DAFF_SIDEBAR_COMPONENTS, DAFF_NAVBAR_COMPONENTS],
})
export class SideFixedSidebarExampleComponent {}
