import { AsyncPipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

import { DaffioDocsTableOfContentsLinkComponent } from '../../components/table-of-contents/link/link.component';
import { DaffioDocsTocService } from '../../services/toc.service';

@Component({
  selector: 'daffio-docs-toc-sidebar-content-container',
  templateUrl: './toc-sidebar-content.component.html',
  styleUrl: './toc-sidebar-content.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    AsyncPipe,
    DaffioDocsTableOfContentsLinkComponent,
  ],
  providers: [
    DaffioDocsTocService,
  ],
})
export class DaffioDocsTocSidebarContentContainer {
  toc$ = this.tocService.toc$;

  constructor(
    private tocService: DaffioDocsTocService,
  ) {}
}
