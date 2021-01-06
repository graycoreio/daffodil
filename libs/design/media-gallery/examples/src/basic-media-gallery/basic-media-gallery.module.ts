import { DaffMediaGalleryModule, DaffImageModule } from '@daffodil/design';
import { NgModule } from '@angular/core';

import { BasicMediaGalleryComponentComponent } from './basic-media-gallery.component';

@NgModule({
    declarations: [
        BasicMediaGalleryComponentComponent,
    ],
    exports: [
        BasicMediaGalleryComponentComponent
    ],
    imports: [
        DaffImageModule,
        DaffMediaGalleryModule
    ],
    providers: []
})
export class BasicMediaGalleryModule { }