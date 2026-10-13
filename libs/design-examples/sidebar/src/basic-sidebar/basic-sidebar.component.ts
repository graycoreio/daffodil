import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

import { DAFF_SIDEBAR_COMPONENTS } from '@daffodil/design/sidebar';
import {
  DAFF_VIEWPORT_COMPONENTS,
  provideDaffViewport,
} from '@daffodil/design/viewport';

@Component({
  selector: 'basic-sidebar-example',
  templateUrl: './basic-sidebar.component.html',
  styleUrls: ['./basic-sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DAFF_SIDEBAR_COMPONENTS,
    DAFF_VIEWPORT_COMPONENTS,
  ],
  providers: [
    provideDaffViewport(),
  ],
})
export class BasicSidebarExampleComponent {}
