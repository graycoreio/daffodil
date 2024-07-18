import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'mismatched-sizes-media-gallery',
  templateUrl: './mismatched-sizes-media-gallery.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MismatchedSizesMediaGalleryComponent {}
