import { NgIf } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

import { DAFF_IMAGE_COMPONENTS } from '@daffodil/design/image';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'load-image',
  templateUrl: './load-image.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DAFF_IMAGE_COMPONENTS,
    NgIf,
  ],
})
export class LoadImageComponent {
  loaded = false;

  load(){
    this.loaded = true;
  }
}
