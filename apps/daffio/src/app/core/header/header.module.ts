import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import {
  DaffNavbarModule,
  DaffButtonModule,
  DaffContainerModule
} from '@daffodil/design';

import { DaffLogoModule } from '@daffodil/branding';

import { DaffioHeaderComponent } from './component/header/header.component';
import { DaffioHeaderItemDirective } from './component/header-item/header-item.directive';
import { DaffioHeaderContainer } from './containers/header.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DaffioHeaderStateModule } from './header.state.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    DaffioHeaderStateModule,
    
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
export class DaffioHeaderModule {}
