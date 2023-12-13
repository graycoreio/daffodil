import { NgModule } from '@angular/core';

import {
  DaffSidebarModule,
  DaffNavbarModule,
} from '@daffodil/design';
import { DaffButtonModule } from '@daffodil/design/button';

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
