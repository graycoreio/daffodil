import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DaffNavbarModule, DaffButtonModule } from '@daffodil/design';
import { SidebarModule } from '../sidebar/sidebar.module';
import { FoundationHeaderComponent } from './components/header/header.component';
import { FoundationHeaderContainer } from './containers/header/header.component';
import { LogoModule } from '../logo/logo.module';

@NgModule({
  imports: [
    CommonModule,
    DaffNavbarModule,
    LogoModule,
    SidebarModule,
    RouterModule,
    DaffButtonModule
  ],
  declarations: [
    FoundationHeaderComponent,
    FoundationHeaderContainer
  ],
  exports: [
    FoundationHeaderComponent,
    FoundationHeaderContainer
  ]
})
export class HeaderModule { }
