import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DaffListModule } from '@daffodil/design/list';

import { DaffioMarketingSidebarContentComponent } from './marketing-sidebar-content.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,

    DaffListModule,
  ],
  declarations: [
    DaffioMarketingSidebarContentComponent,
  ],
  exports: [
    DaffioMarketingSidebarContentComponent,
  ],
})
export class DaffioMarketingSidebarContentComponentModule { }
