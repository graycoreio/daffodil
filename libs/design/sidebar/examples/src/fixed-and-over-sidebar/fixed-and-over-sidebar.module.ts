import { NgModule } from '@angular/core';

import {
  DaffSidebarModule,
  DaffNavbarModule,
} from '@daffodil/design';
import { DaffButtonModule } from '@daffodil/design/button';

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
