import {
  Component,
  Input,
  HostBinding,
  ChangeDetectionStrategy,
} from '@angular/core';

/**
 * @deprecated See {@link DaffThumbnailDirective}
 */
@Component({
  selector: 'daff-gallery-image',
  templateUrl: './gallery-image.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DaffGalleryImageComponent {
  @HostBinding('class.daff-image-gallery__daff-gallery-image--selected') @Input() selected: boolean;
  @HostBinding('class.daff-image-gallery__daff-gallery-image') class = true;
}
