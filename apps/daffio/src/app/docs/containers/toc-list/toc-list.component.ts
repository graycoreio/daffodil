import { AsyncPipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

import { DaffioDocsTableOfContentsLinkComponent } from '../../components/table-of-contents/link/link.component';
import { DaffioDocsTocService } from '../../services/toc.service';

@Component({
  selector: 'daffio-docs-toc-list-container',
  templateUrl: './toc-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    AsyncPipe,
    DaffioDocsTableOfContentsLinkComponent,
  ],
})
export class DaffioDocsTocListContainer {
  toc$ = this.tocService.toc$;

  constructor(
    private tocService: DaffioDocsTocService,
  ) {}
}
