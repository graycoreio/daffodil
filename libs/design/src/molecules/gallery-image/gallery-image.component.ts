import { Component, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { Image } from '../../interfaces/image';

@Component({
  selector: 'daff-gallery-image',
  templateUrl: './gallery-image.component.html',
  encapsulation: ViewEncapsulation.None
})
export class DaffGalleryImageComponent {

  @Input() image: Image;
  @Input() selected: boolean;
  @Output() imageSelected: EventEmitter<Image> = new EventEmitter();

  select(image) : void {
    this.imageSelected.emit(image);
  }
}
