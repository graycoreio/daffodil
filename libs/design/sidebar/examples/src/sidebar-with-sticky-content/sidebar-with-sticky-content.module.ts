import { NgModule } from '@angular/core';

import { DaffNavbarModule } from '@daffodil/design/navbar';
import { DaffSidebarModule } from '@daffodil/design/sidebar';

import { SidebarWithStickyContentComponent } from './sidebar-with-sticky-content.component';

@NgModule({
  imports: [
    DaffSidebarModule,
    DaffNavbarModule,
  ],
  declarations: [
    SidebarWithStickyContentComponent,
  ],
  exports: [
    SidebarWithStickyContentComponent,
  ],
})
export class SidebarWithStickyContentModule { }
