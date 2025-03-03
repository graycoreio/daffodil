
import { AsyncPipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
} from '@angular/core';
import { RouterLink } from '@angular/router';

import { DaffDocTableOfContents } from '@daffodil/docs-utils';
import { DaffRouterActivatedRoute } from '@daffodil/router';

@Component({
  selector: 'daffio-docs-table-of-contents-link',
  templateUrl: './link.component.html',
  styleUrl: 'link.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    AsyncPipe,
    RouterLink,
  ],
})
export class DaffioDocsTableOfContentsLinkComponent {
  /**
   * The doc to render
   */
  @Input() tableOfContents: DaffDocTableOfContents;

  constructor(
    public route: DaffRouterActivatedRoute,
  ) {}
}
