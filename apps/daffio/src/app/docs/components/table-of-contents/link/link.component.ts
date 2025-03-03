
import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { LetDirective } from '@ngrx/component';

import { DaffDocTableOfContents } from '@daffodil/docs-utils';

import { DaffioActiveHeaderService } from '../../../../core/dynamic-fragment/service';

@Component({
  selector: 'daffio-docs-table-of-contents-link',
  templateUrl: './link.component.html',
  styleUrl: 'link.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    LetDirective,
    RouterLink,
  ],
})
export class DaffioDocsTableOfContentsLinkComponent {
  /**
   * The doc to render
   */
  @Input() tableOfContents: DaffDocTableOfContents;
  @Input() @HostBinding('class.in-sidebar') inSidebar = false;

  constructor(
    public activeHeaderService: DaffioActiveHeaderService,
  ) {}
}
