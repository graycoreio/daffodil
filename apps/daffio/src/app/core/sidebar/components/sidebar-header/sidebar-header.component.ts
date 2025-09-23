import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

import { DaffSidebarModule } from '@daffodil/design/sidebar';

import { DaffioSidebarService } from '../../services/sidebar.service';

@Component({
  selector: 'daffio-sidebar-header',
  templateUrl: './sidebar-header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DaffSidebarModule,
  ],
})
export class DaffioSidebarHeaderComponent {
  constructor(
    private sidebarService: DaffioSidebarService,
  ) {}

  close() {
    this.sidebarService.close();
  }
}
