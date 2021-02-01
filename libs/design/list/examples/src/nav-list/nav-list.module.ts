import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { DaffListModule } from '@daffodil/design';

import { NavListComponent } from './nav-list.component';


@NgModule({
  declarations: [
    NavListComponent,
  ],
  imports: [
    CommonModule,

    DaffListModule,
    FontAwesomeModule,
  ],
  exports: [
    NavListComponent,
  ],
})
export class NavListModule { }
