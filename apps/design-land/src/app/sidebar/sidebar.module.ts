import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidebarRoutingModule } from './sidebar-routing.module';
import { SidebarComponent } from './sidebar.component';
import { DaffSidebarModule } from '@daffodil/design';

@NgModule({
  declarations: [SidebarComponent],
  imports: [
    CommonModule,
    DaffSidebarModule,
    SidebarRoutingModule
  ]
})
export class SidebarModule { }
