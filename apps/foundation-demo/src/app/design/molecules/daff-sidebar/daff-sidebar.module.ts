import { NgModule } from '@angular/core';

import { DaffSidebarComponent } from './daff-sidebar/daff-sidebar.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DaffSidebarComponent
  ],
  exports: [
    DaffSidebarComponent
  ]
})
export class DaffSidebarModule { }
