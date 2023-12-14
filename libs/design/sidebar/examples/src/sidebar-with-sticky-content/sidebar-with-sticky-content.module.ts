import { NgModule } from '@angular/core';

import {
  DaffNavbarModule,
  DaffSidebarModule,
} from '@daffodil/design';

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
