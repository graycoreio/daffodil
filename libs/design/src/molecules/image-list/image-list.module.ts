import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DaffImageListComponent } from './image-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DaffImageListComponent
  ],
  exports: [
    DaffImageListComponent
  ]
})
export class DaffImageListModule { }
