import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

import { DAFF_IMAGE_COMPONENTS } from '@daffodil/design/image';
import { DAFF_MEDIA_GALLERY_COMPONENTS } from '@daffodil/design/media-gallery';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'iterated-media-gallery',
  templateUrl: './iterated-media-gallery.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DAFF_MEDIA_GALLERY_COMPONENTS,
    DAFF_IMAGE_COMPONENTS,
  ],
})
export class IteratedMediaGalleryComponent {
  elements = [
    {
      type: 'image',
      src: 'https://images.unsplash.com/photo-1587324438673-56c78a866b15?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1600&q=80',
      thumbnail: 'https://images.unsplash.com/photo-1587324438673-56c78a866b15?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=80&q=80',
      alt: 'Lemons',
      width: 946,
      height: 946,
    },
    {
      type: 'image',
      src: 'https://images.unsplash.com/photo-1607344635159-59930e3330b1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&fit=crop&w=1600',
      thumbnail: 'https://images.unsplash.com/photo-1607344635159-59930e3330b1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&fit=crop&w=80',
      alt: 'Lemons',
      width: 946,
      height: 946,
    },
  ];
}
