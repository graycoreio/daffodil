import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

import { DAFF_IMAGE_LITE_COMPONENTS } from '@daffodil/design/image-lite';

@Component({
  selector: 'skeleton-image-lite-example',
  templateUrl: './skeleton-image-lite.component.html',
  styleUrl: './skeleton-image-lite.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DAFF_IMAGE_LITE_COMPONENTS,
  ],
})
export class SkeletonImageLiteExampleComponent {

}
