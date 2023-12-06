import { NgModule } from '@angular/core';

import { DaffSidebarModule } from '@daffodil/design';

import { SideFixedSidebarComponent } from './side-fixed-sidebar.component';

@NgModule({
  imports: [
    DaffSidebarModule,
  ],
  declarations: [
    SideFixedSidebarComponent,
  ],
  exports: [
    SideFixedSidebarComponent,
  ],
})
export class SideFixedSidebarModule { }
