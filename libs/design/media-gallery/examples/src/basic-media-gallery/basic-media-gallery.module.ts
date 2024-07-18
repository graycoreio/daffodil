import { NgModule } from '@angular/core';

import { DaffImageModule } from '@daffodil/design/image';
import { DaffMediaGalleryModule } from '@daffodil/design/media-gallery';

import { BasicMediaGalleryComponent } from './basic-media-gallery.component';

@NgModule({
  declarations: [
    BasicMediaGalleryComponent,
  ],
  exports: [
    BasicMediaGalleryComponent,
  ],
  imports: [
    DaffImageModule,
    DaffMediaGalleryModule,
  ],
  providers: [],
})
export class BasicMediaGalleryModule { }
