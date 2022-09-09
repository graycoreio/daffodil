import { NgModule } from '@angular/core';

import {
  DaffSidebarModule,
  DaffNavbarModule,
} from '@daffodil/design';

import { SidebarWithStickyComponent } from './sidebar-with-sticky.component';

@NgModule({
  imports: [
    DaffSidebarModule,
    DaffNavbarModule,
  ],
  declarations: [
    SidebarWithStickyComponent,
  ],
  exports: [
    SidebarWithStickyComponent,
  ],
})
export class SidebarWithStickyModule { }
