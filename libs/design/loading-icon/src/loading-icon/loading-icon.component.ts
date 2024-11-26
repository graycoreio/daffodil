import {
  Component,
  ChangeDetectionStrategy,
  HostBinding,
} from '@angular/core';

import { DaffColorableDirective } from '@daffodil/design';

/**
 * @inheritdoc
 */
@Component({
  selector: 'daff-loading-icon',
  templateUrl: './loading-icon.component.html',
  styleUrls: ['./loading-icon.component.scss'],
  hostDirectives: [
    {
      directive: DaffColorableDirective,
      inputs: ['color'],
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class DaffLoadingIconComponent {
  /**
   * @docs-private
   */
  @HostBinding('class.daff-loading-icon') class = true;
}
