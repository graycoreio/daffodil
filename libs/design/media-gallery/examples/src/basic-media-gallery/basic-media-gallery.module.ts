import { NgModule } from '@angular/core';

import { DaffMediaGalleryModule } from '@daffodil/design';
import { DaffImageModule } from '@daffodil/design/image';

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
