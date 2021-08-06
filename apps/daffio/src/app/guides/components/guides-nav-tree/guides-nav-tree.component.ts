import {
  ChangeDetectionStrategy,
  Component,
  Input,
} from '@angular/core';

import { DaffioGuideList } from '../../../docs/models/guide-list';

@Component({
  selector: 'daffio-guides-nav-tree',
  templateUrl: './guides-nav-tree.component.html',
  styleUrls: ['guides-nav-tree.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DaffioGuidesNavTreeComponent {
  /**
   * The guide list to render
   */
  @Input() guideList: DaffioGuideList;
}
