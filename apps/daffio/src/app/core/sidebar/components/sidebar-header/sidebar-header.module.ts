import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { DaffButtonModule } from '@daffodil/design/button';
import { DaffListModule } from '@daffodil/design/list';
import { DaffSidebarModule } from '@daffodil/design/sidebar';

import { DaffioSidebarHeaderComponent } from './sidebar-header.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,

    FontAwesomeModule,
    DaffListModule,
    DaffButtonModule,
    DaffSidebarModule,
  ],
  declarations: [
    DaffioSidebarHeaderComponent,
  ],
  exports: [
    DaffioSidebarHeaderComponent,
  ],
})
export class DaffioSidebarHeaderComponentModule { }
