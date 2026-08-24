import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

import { DAFF_IMAGE_LITE_COMPONENTS } from '@daffodil/design/image-lite';

@Component({
  selector: 'basic-image-lite-example',
  templateUrl: './basic-image-lite.component.html',
  styleUrl: './basic-image-lite.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DAFF_IMAGE_LITE_COMPONENTS,
  ],
})
export class BasicImageLiteExampleComponent {

}
