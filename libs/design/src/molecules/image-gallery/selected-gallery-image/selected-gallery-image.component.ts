import { Component } from '@angular/core';

@Component({
  selector: '[daff-selected-gallery-image]',
  template: '<ng-content></ng-content>',
  host: { class: 'image-gallery__gallery-image--selected' }
})
export class SelectedGalleryImageComponent {}
