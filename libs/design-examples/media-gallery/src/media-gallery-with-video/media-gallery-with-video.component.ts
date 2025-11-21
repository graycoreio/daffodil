import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

import { DAFF_IMAGE_COMPONENTS } from '@daffodil/design/image';
import { DAFF_MEDIA_GALLERY_COMPONENTS } from '@daffodil/design/media-gallery';
import { DAFF_YOUTUBE_PLAYER_COMPONENTS } from '@daffodil/design/youtube-player';

@Component({
  selector: 'media-gallery-with-video-example',
  templateUrl: './media-gallery-with-video.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DAFF_MEDIA_GALLERY_COMPONENTS,
    DAFF_YOUTUBE_PLAYER_COMPONENTS,
    DAFF_IMAGE_COMPONENTS,
  ],
})
export class MediaGalleryWithVideoExampleComponent {}
