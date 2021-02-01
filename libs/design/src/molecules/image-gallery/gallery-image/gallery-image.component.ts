import {
  Component,
  Input,
  HostBinding,
} from '@angular/core';

@Component({
  selector: 'daff-gallery-image',
  templateUrl: './gallery-image.component.html',
})
export class DaffGalleryImageComponent {
  @HostBinding('class.daff-image-gallery__daff-gallery-image--selected') @Input() selected: boolean;
  @HostBinding('class.daff-image-gallery__daff-gallery-image') class = true;
}
