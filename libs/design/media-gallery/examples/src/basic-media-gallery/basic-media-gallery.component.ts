import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

import { DaffImageModule } from '@daffodil/design/image';
import { DaffMediaGalleryModule } from '@daffodil/design/media-gallery';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'basic-media-gallery',
  templateUrl: './basic-media-gallery.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [DaffMediaGalleryModule, DaffImageModule],
})
export class BasicMediaGalleryComponent {


}
