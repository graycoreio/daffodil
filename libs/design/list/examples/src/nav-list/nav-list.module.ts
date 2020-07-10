import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavListComponent } from './nav-list.component';

import { DaffListModule } from '@daffodil/design';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    NavListComponent
  ],
  imports: [
    CommonModule,
    
    DaffListModule,
    FontAwesomeModule
  ],
  exports: [
    NavListComponent
  ]
})
export class NavListModule { }