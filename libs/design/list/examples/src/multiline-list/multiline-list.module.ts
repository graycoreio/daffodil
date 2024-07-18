import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { DaffListModule } from '@daffodil/design/list';

import { MultilineListComponent } from './multiline-list.component';

@NgModule({
  declarations: [
    MultilineListComponent,
  ],
  imports: [
    CommonModule,

    DaffListModule,
    FontAwesomeModule,
  ],
  exports: [
    MultilineListComponent,
  ],
})
export class MultilineListModule { }
