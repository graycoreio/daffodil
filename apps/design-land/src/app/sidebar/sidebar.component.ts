import {
  Component,
  OnInit,
} from '@angular/core';

import { DaffSidebarMode } from '@daffodil/design';

@Component({
  selector: 'design-land-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class DesignLandSidebarComponent {
  mode: DaffSidebarMode = 'push';
  open = false;
}
