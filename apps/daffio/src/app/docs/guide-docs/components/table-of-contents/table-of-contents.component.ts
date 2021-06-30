import {
  ChangeDetectionStrategy,
  Component,
  Input,
} from '@angular/core';

import { DaffioDoc } from '../../../shared/models/doc';

@Component({
  selector: 'daffio-guide-table-of-contents',
  templateUrl: './table-of-contents.component.html',
  styleUrls: ['table-of-contents.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DaffioGuideTableOfContentsComponent {
  /**
   * The doc to render
   */
	@Input() tableOfContents: DaffioDoc['tableOfContents']['json'];
}
