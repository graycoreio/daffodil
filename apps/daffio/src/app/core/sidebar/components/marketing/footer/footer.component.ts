import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

import { DaffSidebarFooterComponent } from '@daffodil/design/sidebar';

@Component({
  selector: 'daffio-marketing-sidebar-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    DaffSidebarFooterComponent,
  ],
})
export class DaffioMarketingSidebarFooterComponent { }
