import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DaffListModule } from '@daffodil/design/list';

import { DaffioMarketingSidebarComponent } from './marketing-sidebar.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,

    DaffListModule,
  ],
  declarations: [
    DaffioMarketingSidebarComponent,
  ],
  exports: [
    DaffioMarketingSidebarComponent,
  ],
})
export class DaffioMarketingSidebarComponentModule { }
