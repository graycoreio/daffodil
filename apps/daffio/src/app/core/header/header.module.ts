import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import {
  DaffNavbarModule,
  DaffButtonModule,
  DaffContainerModule
} from '@daffodil/design';
import { DaffLogoModule } from '@daffodil/branding';


import { DaffioHeaderComponent } from './component/header.component';
import { DaffioHeaderContainer } from './containers/header.component';
import { DaffioHeaderItemDirective } from './header-item/header-item.directive';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    
    DaffNavbarModule,
    DaffLogoModule,
    DaffButtonModule,
    DaffContainerModule,
    FontAwesomeModule
  ],
  declarations: [
    DaffioHeaderComponent,
    DaffioHeaderContainer,
    DaffioHeaderItemDirective
  ],
  exports: [
    DaffioHeaderContainer
  ]
})
export class DaffioHeaderModule {
  constructor() {
    // Add an icon to the library for convenient access in other components
    library.add(faBars);
  }
}
