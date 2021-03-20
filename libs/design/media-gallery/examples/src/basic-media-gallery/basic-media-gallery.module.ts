import { NgModule } from '@angular/core';

import {
  DaffMediaGalleryModule,
  DaffImageModule,
} from '@daffodil/design';

import { BasicMediaGalleryComponentComponent } from './basic-media-gallery.component';

@NgModule({
  declarations: [
    BasicMediaGalleryComponentComponent,
  ],
  exports: [
    BasicMediaGalleryComponentComponent,
  ],
  imports: [
    DaffImageModule,
    DaffMediaGalleryModule,
  ],
  providers: [],
})
export class BasicMediaGalleryModule { }
