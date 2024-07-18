import { NgModule } from '@angular/core';

import { DaffImageModule } from '@daffodil/design/image';
import { DaffMediaGalleryModule } from '@daffodil/design/media-gallery';

import { MismatchedSizesMediaGalleryComponent } from './mismatched-sizes-media-gallery.component';

@NgModule({
  declarations: [
    MismatchedSizesMediaGalleryComponent,
  ],
  exports: [
    MismatchedSizesMediaGalleryComponent,
  ],
  imports: [
    DaffImageModule,
    DaffMediaGalleryModule,
  ],
  providers: [],
})
export class MismatchedSizesMediaGalleryModule { }
