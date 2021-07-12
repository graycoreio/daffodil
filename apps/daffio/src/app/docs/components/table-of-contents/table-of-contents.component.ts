import {
  ChangeDetectionStrategy,
  Component,
  Input,
} from '@angular/core';

import { DaffioDoc } from '../../models/doc';

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
	@Input() tableOfContents: DaffioDoc['tableOfContents']['json'];
}
