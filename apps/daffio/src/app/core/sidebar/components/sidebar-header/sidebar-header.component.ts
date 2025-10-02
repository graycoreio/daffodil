import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

import { DaffSidebarHeaderComponent } from '@daffodil/design/sidebar';

import { DaffioSidebarService } from '../../services/sidebar.service';
@Component({
  selector: 'daffio-sidebar-header',
  templateUrl: './sidebar-header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DaffSidebarHeaderComponent,
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
