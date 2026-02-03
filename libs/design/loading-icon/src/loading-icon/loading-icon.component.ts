import {
  Component,
  ChangeDetectionStrategy,
  HostBinding,
} from '@angular/core';

import { DaffColorableDirective } from '@daffodil/design';

/**
 * @deprecated in favor of `DaffSpinnerComponent`. Deprecated in version 0.91.1. Will be removed in version 0.94.0.
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
})
export class DaffLoadingIconComponent {
  /**
   * @docs-private
   */
  @HostBinding('class.daff-loading-icon') class = true;
}
