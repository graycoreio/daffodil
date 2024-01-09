import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { DaffLogoModule } from '@daffodil/branding';
import { DaffButtonModule } from '@daffodil/design/button';
import { DaffThemeSwitchButtonModule } from '@daffodil/theme-switch';

import { DaffioHomeHeaderContainer } from './header.component';
import { DaffioHeaderComponentModule } from '../../../../core/header/components/header.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,

    DaffioHeaderComponentModule,
    DaffLogoModule,
    DaffButtonModule,
    DaffThemeSwitchButtonModule,

    FontAwesomeModule,
  ],
  declarations: [
    DaffioHomeHeaderContainer,
  ],
  exports: [
    DaffioHomeHeaderContainer,
  ],
})
export class DaffioHomeHeaderModule { }
