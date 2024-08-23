import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DaffSidebarModule } from '@daffodil/design/sidebar';

import { DaffioSidebarFooterComponent } from './sidebar-footer.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    DaffSidebarModule,
  ],
  declarations: [
    DaffioSidebarFooterComponent,
  ],
  exports: [
    DaffioSidebarFooterComponent,
  ],
})
export class DaffioSidebarFooterComponentModule { }
