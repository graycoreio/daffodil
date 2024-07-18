import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'skeleton-media-gallery',
  templateUrl: './skeleton-media-gallery.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkeletonMediaGalleryComponent {


}
