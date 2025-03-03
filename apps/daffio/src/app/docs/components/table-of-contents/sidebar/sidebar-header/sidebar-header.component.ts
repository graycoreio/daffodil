import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

import { DAFF_SIDEBAR_COMPONENTS } from '@daffodil/design/sidebar';

import { DaffioSidebarService } from '../../../../../core/sidebar/services/sidebar.service';

@Component({
  selector: 'daffio-docs-toc-sidebar-header',
  templateUrl: './sidebar-header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DAFF_SIDEBAR_COMPONENTS,
  ],
})
export class DaffioDocsTocSidebarHeaderComponent {
  constructor(
    private sidebarService: DaffioSidebarService,
  ) {}

  close() {
    this.sidebarService.close();
  }
}
