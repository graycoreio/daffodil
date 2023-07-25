import { NgModule } from '@angular/core';

import {
  DaffSidebarModule,
  DaffNavbarModule,
  DaffButtonModule,
} from '@daffodil/design';

import { UnderSidebarComponent } from './under-sidebar.component';

@NgModule({
  imports: [
    DaffSidebarModule,
    DaffNavbarModule,
    DaffButtonModule,
  ],
  declarations: [
    UnderSidebarComponent,
  ],
  exports: [
    UnderSidebarComponent,
  ],
})
export class UnderSidebarModule { }
