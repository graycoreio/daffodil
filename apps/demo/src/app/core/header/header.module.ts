import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DaffNavbarModule, DaffButtonModule } from '@daffodil/design';
import { SidebarModule } from '../sidebar/sidebar.module';
import { DemoHeaderComponent } from './components/header/header.component';
import { DemoHeaderContainer } from './containers/header/header.component';
import { LogoModule } from '../logo/logo.module';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [
    CommonModule,
    DaffNavbarModule,
    LogoModule,
    SidebarModule,
    RouterModule,
    DaffButtonModule,
    FontAwesomeModule
  ],
  declarations: [
    DemoHeaderComponent,
    DemoHeaderContainer
  ],
  exports: [
    DemoHeaderComponent,
    DemoHeaderContainer
  ]
})
export class HeaderModule {}
