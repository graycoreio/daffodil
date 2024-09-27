import {
  Component,
  ChangeDetectionStrategy,
  HostBinding,
} from '@angular/core';

import { DaffSizableDirective } from '@daffodil/design';

/**
 * @inheritdoc
 */
@Component({
  selector: 'daff-container',
  styleUrls: ['./container.component.scss'],
  template: '<ng-content></ng-content>',
  hostDirectives: [
    {
      directive: DaffSizableDirective,
      inputs: ['size'],
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class DaffContainerComponent {
  /**
   * @docs-private
   */
  @HostBinding('class.daff-container') class = true;
}
