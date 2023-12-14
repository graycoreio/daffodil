import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DaffImageModule } from '@daffodil/design/image';

import { LoadImageComponent } from './load-image.component';

@NgModule({
  declarations: [
    LoadImageComponent,
  ],
  exports: [
    LoadImageComponent,
  ],
  imports: [
    CommonModule,
    DaffImageModule,
  ],
})
export class LoadImageModule { }
