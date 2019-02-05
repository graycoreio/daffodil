import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DaffSidebarModule, DaffButtonModule } from '@daffodil/design';

import { DaffioSidebarStateModule } from './sidebar.state.module';
import { DaffioSidebarViewportContainerComponent } from './containers/sidebar-viewport/sidebar-viewport.component';
import { DaffioSidebarContainerComponent } from './containers/sidebar/sidebar.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    
    DaffioSidebarStateModule,
    DaffSidebarModule,
    DaffButtonModule
  ],
  declarations: [
    DaffioSidebarViewportContainerComponent,
    DaffioSidebarContainerComponent
  ],
  exports: [
    DaffioSidebarViewportContainerComponent,
    DaffioSidebarContainerComponent
  ]
})
export class DaffioSidebarModule { }
