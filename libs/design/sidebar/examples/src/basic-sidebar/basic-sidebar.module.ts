import { NgModule } from '@angular/core';

import {
  DaffSidebarModule,
  DaffNavbarModule,
} from '@daffodil/design';

import { BasicSidebarComponent } from './basic-sidebar.component';

@NgModule({
  imports: [
    DaffSidebarModule,
    DaffNavbarModule,
  ],
  declarations: [
    BasicSidebarComponent,
  ],
  exports: [
    BasicSidebarComponent,
  ],
})
export class BasicSidebarModule { }
