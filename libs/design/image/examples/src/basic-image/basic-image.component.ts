import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

import { DAFF_IMAGE_COMPONENTS } from '@daffodil/design/image';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'basic-image',
  templateUrl: './basic-image.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DAFF_IMAGE_COMPONENTS,
  ],
})
export class BasicImageComponent {

}
