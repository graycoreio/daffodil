import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DaffNavbarModule, DaffButtonModule } from '@daffodil/design';
import { SidebarModule } from '../sidebar/sidebar.module';
import { DemoHeaderComponent } from './components/header/header.component';
import { DemoHeaderContainer } from './containers/header/header.component';
import { LogoModule } from '../logo/logo.module';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

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
export class HeaderModule {
  constructor() {
    // Add an icon to the library for convenient access in other components
    library.add(faBars, faShoppingCart);
  }
}
