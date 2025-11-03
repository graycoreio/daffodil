
import {
  ChangeDetectionStrategy,
  Component,
  Input,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { LetDirective } from '@ngrx/component';

import { DaffDocTableOfContents } from '@daffodil/docs-utils';

import { DaffioActiveHeaderService } from '../../../core/dynamic-fragment/service';

@Component({
  selector: 'daffio-docs-table-of-contents',
  templateUrl: './table-of-contents.component.html',
  styleUrl: 'table-of-contents.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.in-sidebar]': 'inSidebar',
  },
  imports: [
    LetDirective,
    RouterLink,
  ],
})
export class DaffioDocsTableOfContentsComponent {
  /**
   * The doc to render
   */
  @Input() tableOfContents: DaffDocTableOfContents;
  @Input() inSidebar = false;

  constructor(
    public activeHeaderService: DaffioActiveHeaderService,
  ) {}
}
