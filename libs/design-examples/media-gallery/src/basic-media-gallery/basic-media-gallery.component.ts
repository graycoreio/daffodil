import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

import { DAFF_IMAGE_LITE_COMPONENTS } from '@daffodil/design/image-lite';
import { DAFF_MEDIA_GALLERY_COMPONENTS } from '@daffodil/design/media-gallery';

@Component({
  selector: 'basic-media-gallery-example',
  templateUrl: './basic-media-gallery.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DAFF_MEDIA_GALLERY_COMPONENTS,
    DAFF_IMAGE_LITE_COMPONENTS,
  ],
})
export class BasicMediaGalleryExampleComponent {}
