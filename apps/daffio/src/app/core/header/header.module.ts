import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import {
  DaffNavbarModule,
  DaffButtonModule,
  DaffContainerModule,
  DaffLinkModule
} from '@daffodil/design';
import { DaffLogoModule } from '@daffodil/branding';


import { DaffioHeaderComponent } from './component/header.component';
import { DaffioHeaderContainer } from './containers/header.component';
import { DaffioHeaderItemDirective } from './header-item/header-item.directive';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    
    DaffNavbarModule,
    DaffLogoModule,
    DaffButtonModule,
    DaffContainerModule,
    DaffLinkModule
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
export class DaffioHeaderModule { }
