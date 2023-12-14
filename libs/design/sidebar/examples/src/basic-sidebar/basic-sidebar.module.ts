import { NgModule } from '@angular/core';

import {
  DaffSidebarModule,
  DaffNavbarModule,
  DaffLinkSetModule,
} from '@daffodil/design';

import { BasicSidebarComponent } from './basic-sidebar.component';

@NgModule({
  imports: [
    DaffSidebarModule,
    DaffNavbarModule,
    DaffLinkSetModule,
  ],
  declarations: [
    BasicSidebarComponent,
  ],
  exports: [
    BasicSidebarComponent,
  ],
})
export class BasicSidebarModule { }
