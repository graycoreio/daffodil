import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

import { DAFF_IMAGE_COMPONENTS } from '@daffodil/design/image';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'skeleton-image',
  templateUrl: './skeleton-image.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DAFF_IMAGE_COMPONENTS,
  ],
})
export class SkeletonImageComponent {

}
