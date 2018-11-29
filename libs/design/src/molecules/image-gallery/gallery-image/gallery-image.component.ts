import { Component, Input } from '@angular/core';

@Component({
  selector: 'daff-gallery-image',
  templateUrl: './gallery-image.component.html',
  host: { 
    'class' : 'image-gallery__gallery-image',
    '[class.image-gallery__gallery-image--selected]':'selected' 
  }
})
export class DaffGalleryImageComponent {
  @Input() selected: boolean;
}
