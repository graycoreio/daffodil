import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

import { DaffioDocsTableOfContentsComponent } from '../../components/table-of-contents/table-of-contents.component';
import { DaffioDocsTocService } from '../../toc/toc.service';

@Component({
  selector: 'daffio-docs-toc-sidebar-content-container',
  templateUrl: './toc-sidebar-content.component.html',
  styleUrl: './toc-sidebar-content.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DaffioDocsTableOfContentsComponent,
  ],
})
export class DaffioDocsTocSidebarContentContainer {
  toc = this.tocService.toc;

  constructor(
    private tocService: DaffioDocsTocService,
  ) {}
}
