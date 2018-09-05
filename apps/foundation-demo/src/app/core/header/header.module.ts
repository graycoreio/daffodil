import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DaffNavbarModule } from '../../design/molecules/navbar/navbar.module';
import { SidebarModule } from '../sidebar/sidebar.module';
import { HeaderComponent } from './components/header/header.component';
import { HeaderContainer } from './containers/header/header.component';
import { LogoModule } from '../logo/logo.module';

@NgModule({
  imports: [
    CommonModule,
    DaffNavbarModule,
    LogoModule,
    SidebarModule,
    RouterModule
  ],
  declarations: [
    HeaderComponent,
    HeaderContainer
  ],
  exports: [
    HeaderComponent,
    HeaderContainer
  ]
})
export class HeaderModule { }
