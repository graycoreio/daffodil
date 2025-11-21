import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

import { DAFF_MEDIA_GALLERY_COMPONENTS } from '@daffodil/design/media-gallery';

@Component({
  selector: 'skeleton-media-gallery-example',
  templateUrl: './skeleton-media-gallery.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DAFF_MEDIA_GALLERY_COMPONENTS,
  ],
})
export class SkeletonMediaGalleryExampleComponent {


}
