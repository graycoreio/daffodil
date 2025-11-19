import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

import { DAFF_IMAGE_COMPONENTS } from '@daffodil/design/image';

@Component({
  selector: 'load-image-example',
  templateUrl: './load-image.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DAFF_IMAGE_COMPONENTS,
  ],
})
export class LoadImageExampleComponent {
  loaded = false;

  load(){
    this.loaded = true;
  }
}
