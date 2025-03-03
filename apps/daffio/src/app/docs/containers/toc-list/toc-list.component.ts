import { AsyncPipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
} from '@angular/core';

import { DaffDocTableOfContents } from '@daffodil/docs-utils';

import { DaffioDocsListComponent } from '../../components/docs-list/docs-list.component';
import { DaffioDocsTableOfContentsLinkComponent } from '../../components/table-of-contents/link/link.component';

@Component({
  selector: 'daffio-docs-toc-list-container',
  templateUrl: './toc-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    AsyncPipe,
    DaffioDocsListComponent,
    DaffioDocsTableOfContentsLinkComponent,
  ],
})
export class DaffioDocsTocListContainer {
  @Input() toc: DaffDocTableOfContents = [];
}
