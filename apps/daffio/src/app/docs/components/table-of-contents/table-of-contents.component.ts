import {
  ChangeDetectionStrategy,
  Component,
  Input,
} from '@angular/core';

import { DaffGuideDoc } from '@daffodil/docs-utils';

@Component({
  selector: 'daffio-docs-table-of-contents',
  templateUrl: './table-of-contents.component.html',
  styleUrls: ['table-of-contents.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DaffioDocsTableOfContentsComponent {
  /**
   * The doc to render
   */
  @Input() tableOfContents: DaffGuideDoc['tableOfContents']['json'];
}
