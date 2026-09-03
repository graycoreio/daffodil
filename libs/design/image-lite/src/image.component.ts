/* eslint-disable @angular-eslint/component-selector */
import {
  Component,
  ChangeDetectionStrategy,
} from '@angular/core';

import { DaffSkeletonableDirective } from '@daffodil/design';

@Component({
  selector: 'img[daff-image]',
  template: '<ng-content></ng-content>',
  styleUrl: './image.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  hostDirectives: [
    {
      directive: DaffSkeletonableDirective,
      inputs: ['skeleton'],
    },
  ],
  host: {
    class: 'daff-image-lite',
  },
})
export class DaffImageLiteComponent {}
