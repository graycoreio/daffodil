import { NgModule } from '@angular/core';

import { LoadImageComponent } from './load-image.component';

import { DaffImageModule } from '@daffodil/design';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    LoadImageComponent
  ],
  exports: [
    LoadImageComponent
  ],
  imports: [
    CommonModule,
    DaffImageModule
  ]
})
export class LoadImageModule { }