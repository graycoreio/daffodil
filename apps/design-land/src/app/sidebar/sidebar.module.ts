import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidebarRoutingModule } from './sidebar-routing.module';
import { SidebarComponent } from './sidebar.component';
import { DaffSidebarModule, DaffButtonModule, DaffNativeSelectModule, DaffFormFieldModule } from '@daffodil/design';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [SidebarComponent],
  imports: [
    CommonModule,
    FormsModule,
    DaffNativeSelectModule,
    DaffFormFieldModule,
    DaffButtonModule,
    DaffSidebarModule,
    SidebarRoutingModule
  ]
})
export class SidebarModule { }
