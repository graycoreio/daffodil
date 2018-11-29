import { Component, Input } from '@angular/core';

@Component({
  selector: 'daff-gallery-image',
  templateUrl: './gallery-image.component.html',
  host: { 
    'class' : 'daff-image-gallery__daff-gallery-image',
    '[class.daff-image-gallery__daff-gallery-image--selected]':'selected' 
  }
})
export class DaffGalleryImageComponent {
  @Input() selected: boolean;
}
