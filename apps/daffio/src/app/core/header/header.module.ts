import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { DaffLogoModule } from '@daffodil/branding';
import {
  DaffNavbarModule,
  DaffButtonModule,
  DaffContainerModule,
} from '@daffodil/design';

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
    FontAwesomeModule,
  ],
  declarations: [
    DaffioHeaderComponent,
    DaffioHeaderContainer,
    DaffioHeaderItemDirective,
  ],
  exports: [
    DaffioHeaderContainer,
  ],
})
export class DaffioHeaderModule {}
