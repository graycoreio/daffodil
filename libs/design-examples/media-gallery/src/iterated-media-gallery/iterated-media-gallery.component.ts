import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

import { DAFF_IMAGE_LITE_COMPONENTS } from '@daffodil/design/image-lite';
import { DAFF_MEDIA_GALLERY_COMPONENTS } from '@daffodil/design/media-gallery';

@Component({
  selector: 'iterated-media-gallery-example',
  templateUrl: './iterated-media-gallery.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DAFF_MEDIA_GALLERY_COMPONENTS,
    DAFF_IMAGE_LITE_COMPONENTS,
  ],
})
export class IteratedMediaGalleryExampleComponent {
  elements = [
    {
      type: 'image',
      src: 'https://assets.daff.io/elegant_gold_soap.png',
      thumbnail: 'https://assets.daff.io/elegant_gold_soap.png',
      alt: 'Elegant Gold Soap T-Shirt',
      width: 934,
      height: 934,
    },
    {
      type: 'image',
      src: 'https://assets.daff.io/elegant_plastic_gloves.png',
      thumbnail: 'https://assets.daff.io/elegant_plastic_gloves.png',
      alt: 'Elegant Plastic Gloves T-Shirt',
      width: 622,
      height: 934,
    },
    {
      type: 'image',
      src: 'https://assets.daff.io/ergonomic_bronze_pants.png',
      thumbnail: 'https://assets.daff.io/ergonomic_bronze_pants.png',
      alt: 'Ergonomic Bronze Pants T-Shirt',
      width: 934,
      height: 934,
    },
  ];
}
