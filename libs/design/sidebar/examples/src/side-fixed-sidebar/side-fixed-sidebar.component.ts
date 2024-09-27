import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

import { DAFF_NAVBAR_COMPONENTS } from '@daffodil/design/navbar';
import { DaffSidebarModule } from '@daffodil/design/sidebar';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'side-fixed-sidebar',
  templateUrl: './side-fixed-sidebar.component.html',
  styleUrls: ['side-fixed-sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [DaffSidebarModule, DAFF_NAVBAR_COMPONENTS],
})
export class SideFixedSidebarComponent {}
