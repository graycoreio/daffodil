import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DaffioSidebarFooterComponent } from './sidebar-footer.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    DaffioSidebarFooterComponent,
  ],
  exports: [
    DaffioSidebarFooterComponent,
  ],
})
export class DaffioSidebarFooterComponentModule { }
