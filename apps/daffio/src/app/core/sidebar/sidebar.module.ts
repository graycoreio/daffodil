import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DaffSidebarModule, DaffButtonModule, DaffListModule, DaffLoadingIconModule } from '@daffodil/design';

import { DaffioSidebarStateModule } from './sidebar.state.module';
import { DaffioSidebarViewportContainer } from './containers/sidebar-viewport/sidebar-viewport.component';
import { DaffioNavigationItemModule } from '../navigation/components/navigation-item/navigation-item.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    
    DaffioSidebarStateModule,
    DaffSidebarModule,
    DaffButtonModule,
    DaffListModule,
    DaffLoadingIconModule,
    DaffioNavigationItemModule
  ],
  declarations: [
    DaffioSidebarViewportContainer
  ],
  exports: [
    DaffioSidebarViewportContainer
  ]
})
export class DaffioSidebarModule { }
