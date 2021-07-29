import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {
  DaffSidebarModule,
  DaffButtonModule,
  DaffNativeSelectModule,
  DaffFormFieldModule,
} from '@daffodil/design';

import { DesignLandSidebarRoutingModule } from './sidebar-routing.module';
import { DesignLandSidebarComponent } from './sidebar.component';

@NgModule({
  declarations: [DesignLandSidebarComponent],
  imports: [
    CommonModule,
    FormsModule,
    DaffNativeSelectModule,
    DaffFormFieldModule,
    DaffButtonModule,
    DaffSidebarModule,
    DesignLandSidebarRoutingModule,
  ],
})
export class DesignLandSidebarModule { }
