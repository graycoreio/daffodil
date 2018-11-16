import { Component, Input } from '@angular/core';

@Component({
  selector: '[daff-gallery-image]',
  template: '<ng-content></ng-content>',
  host: { 
    'class' : 'image-gallery__gallery-image',
    '[class.image-gallery__gallery-image--selected]':'selected' 
  }
})
export class GalleryImageComponent {
  @Input() selected: boolean;
}
