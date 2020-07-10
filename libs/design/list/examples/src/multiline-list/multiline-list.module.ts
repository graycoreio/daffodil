import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MultilineListComponent } from './multiline-list.component';

import { DaffListModule } from '@daffodil/design';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    MultilineListComponent
  ],
  imports: [
    CommonModule,
    
    DaffListModule,
    FontAwesomeModule
  ],
  exports: [
    MultilineListComponent
  ]
})
export class MultilineListModule { }