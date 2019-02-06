import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DaffNavbarModule, DaffButtonModule, DaffContainerModule } from '@daffodil/design';
import { DaffioLogoModule } from '../logo/logo.module';
import { DaffioHeaderComponent } from './component/header.component';
import { DaffioHeaderContainer } from './containers/header.component';
import { DaffioHeaderItemComponent } from './header-item/header-item.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    
    DaffNavbarModule,
    DaffioLogoModule,
    DaffButtonModule,
    DaffContainerModule
  ],
  declarations: [
    DaffioHeaderComponent,
    DaffioHeaderContainer,
    DaffioHeaderItemComponent
  ],
  exports: [
    DaffioHeaderContainer
  ]
})
export class DaffioHeaderModule { }
