import {
  ChangeDetectionStrategy,
  Component,
  Input,
} from '@angular/core';

import { DaffioGuideList } from '../../../shared/models/guide-list';

@Component({
  selector: 'daffio-guide-nav',
  templateUrl: './guide-nav.component.html',
  styleUrls: ['guide-nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DaffioGuideNavComponent {
  /**
   * The guide list to render
   */
  @Input() guideList: DaffioGuideList;
}
