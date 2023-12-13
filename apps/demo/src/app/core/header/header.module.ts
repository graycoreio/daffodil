import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { DaffNavbarModule } from '@daffodil/design';
import { DaffButtonModule } from '@daffodil/design/button';

import { DemoHeaderComponent } from './components/header/header.component';
import { DemoHeaderContainer } from './containers/header/header.component';
import { LogoModule } from '../logo/logo.module';
import { SidebarModule } from '../sidebar/sidebar.module';

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
