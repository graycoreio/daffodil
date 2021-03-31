import { NgModule } from '@angular/core';

import {
  DaffMediaGalleryModule,
  DaffImageModule,
} from '@daffodil/design';

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
