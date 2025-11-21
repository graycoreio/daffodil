import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

import { DAFF_IMAGE_COMPONENTS } from '@daffodil/design/image';

@Component({
  selector: 'skeleton-image-example',
  templateUrl: './skeleton-image.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DAFF_IMAGE_COMPONENTS,
  ],
})
export class SkeletonImageExampleComponent {

}
