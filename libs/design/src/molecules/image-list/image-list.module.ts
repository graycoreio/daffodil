import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImageListComponent } from './image-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ImageListComponent
  ],
  exports: [
    ImageListComponent
  ]
})
export class DaffImageListModule { }
