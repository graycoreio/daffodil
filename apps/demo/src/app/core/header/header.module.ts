import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { DaffButtonModule } from '@daffodil/design/button';
import { DaffNavbarModule } from '@daffodil/design/navbar';

import { LogoModule } from '../logo/logo.module';
import { SidebarModule } from '../sidebar/sidebar.module';
import { DemoHeaderComponent } from './components/header/header.component';
import { DemoHeaderContainer } from './containers/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    DaffNavbarModule,
    LogoModule,
    SidebarModule,
    RouterModule,
    DaffButtonModule,
    FontAwesomeModule,
  ],
  declarations: [
    DemoHeaderComponent,
    DemoHeaderContainer,
  ],
  exports: [
    DemoHeaderComponent,
    DemoHeaderContainer,
  ],
})
export class HeaderModule {}
