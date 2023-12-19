import { NgModule } from '@angular/core';

import {
  DaffNavbarModule,
  DaffLinkSetModule,
} from '@daffodil/design';
import { DaffSidebarModule } from '@daffodil/design/sidebar';

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
