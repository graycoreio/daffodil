import { NgModule } from '@angular/core';

import { DaffMediaGalleryModule } from '@daffodil/design';
import { DaffImageModule } from '@daffodil/design/image';

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
