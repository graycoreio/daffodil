/* eslint-disable quote-props */
import {
  Component,
  ChangeDetectionStrategy,
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
  host: {
    'class': 'daff-container',
  },
})
export class DaffContainerComponent {}
