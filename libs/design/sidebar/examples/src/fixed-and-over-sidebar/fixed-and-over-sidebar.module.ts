import { NgModule } from '@angular/core';

import {
  DaffSidebarModule,
  DaffNavbarModule,
  DaffButtonModule,
} from '@daffodil/design';

import { FixedAndOverSidebarComponent } from './fixed-and-over-sidebar.component';

@NgModule({
  imports: [
    DaffSidebarModule,
    DaffNavbarModule,
    DaffButtonModule,
  ],
  declarations: [
    FixedAndOverSidebarComponent,
  ],
  exports: [
    FixedAndOverSidebarComponent,
  ],
})
export class FixedAndOverSidebarModule { }
