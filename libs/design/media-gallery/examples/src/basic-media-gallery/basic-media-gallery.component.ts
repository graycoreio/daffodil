import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'basic-media-gallery',
  templateUrl: './basic-media-gallery.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicMediaGalleryComponent {


}
