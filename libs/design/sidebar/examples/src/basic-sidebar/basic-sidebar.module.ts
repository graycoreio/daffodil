import { NgModule } from '@angular/core';

import { DaffLinkSetModule } from '@daffodil/design/link-set';
import { DaffNavbarModule } from '@daffodil/design/navbar';
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
