import {
  Component,
  Input,
  ChangeDetectionStrategy,
} from '@angular/core';

import { DaffioDoc } from '../../../shared/models/doc';

@Component({
  selector: 'daffio-guide-viewer',
  templateUrl: './guide-viewer.component.html',
  styleUrls: ['./guide-viewer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DaffioGuideViewerComponent {

  /**
   * The doc to render
   */
  @Input() doc: DaffioDoc;
}
