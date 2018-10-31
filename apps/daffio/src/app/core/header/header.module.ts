import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DaffNavbarModule, DaffContainerModule, DaffButtonModule } from '@daffodil/design';
import { LogoModule } from '../logo/logo.module';
import { DaffioHeaderComponent } from './component/header.component';
import { DaffioSidebarModule } from '../sidebar/sidebar.module';
import { DaffioHeaderContainer } from './containers/header.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    DaffNavbarModule,
    LogoModule,
    DaffContainerModule,
    DaffButtonModule,
    DaffioSidebarModule
  ],
  declarations: [
    DaffioHeaderComponent,
    DaffioHeaderContainer
  ],
  exports: [
    DaffioHeaderContainer
  ]
})
export class DaffioHeaderModule { }
