import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DaffListModule } from '@daffodil/design';

import { BasicListComponent } from './basic-list.component';


@NgModule({
  declarations: [
    BasicListComponent,
  ],
  imports: [
    CommonModule,
    DaffListModule,
  ],
  exports: [
    BasicListComponent,
  ],
})
export class BasicListModule { }
