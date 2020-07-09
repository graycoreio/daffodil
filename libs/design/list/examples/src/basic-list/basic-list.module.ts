import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicListComponent } from './basic-list.component';

import { DaffListModule } from '@daffodil/design';

@NgModule({
  declarations: [
    BasicListComponent
  ],
  imports: [
    CommonModule,
    DaffListModule
  ],
  exports: [
    BasicListComponent
  ]
})
export class BasicListModule { }