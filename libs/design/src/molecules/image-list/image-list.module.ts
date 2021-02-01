import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DaffImageListComponent } from './image-list.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    DaffImageListComponent,
  ],
  exports: [
    DaffImageListComponent,
  ],
})
export class DaffImageListModule { }
