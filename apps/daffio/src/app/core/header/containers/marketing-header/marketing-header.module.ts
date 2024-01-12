import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { DaffLogoModule } from '@daffodil/branding';
import { DaffButtonModule } from '@daffodil/design/button';
import { DaffContainerModule } from '@daffodil/design/container';
import { DaffThemeSwitchButtonModule } from '@daffodil/theme-switch';

import { DaffioMarketingHeaderContainer } from './marketing-header.component';
import { DaffioHeaderComponentModule } from '../../components/header.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,

    DaffioHeaderComponentModule,
    DaffLogoModule,
    DaffButtonModule,
    DaffThemeSwitchButtonModule,
    DaffContainerModule,

    FontAwesomeModule,
  ],
  declarations: [
    DaffioMarketingHeaderContainer,
  ],
  exports: [
    DaffioMarketingHeaderContainer,
  ],
})
export class DaffioMarketingHeaderContainerModule { }
