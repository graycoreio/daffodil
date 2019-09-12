import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DaffSidebarModule, DaffButtonModule } from '@daffodil/design';

import { DaffioSidebarStateModule } from './sidebar.state.module';
import { DaffioSidebarViewportContainer } from './containers/sidebar-viewport/sidebar-viewport.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    
    DaffioSidebarStateModule,
    DaffSidebarModule,
    DaffButtonModule,
    FontAwesomeModule
  ],
  declarations: [
    DaffioSidebarViewportContainer
  ],
  exports: [
    DaffioSidebarViewportContainer
  ]
})
export class DaffioSidebarModule {}
