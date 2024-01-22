import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import {
  DaffCopyrightModule,
  DaffLogoModule,
} from '@daffodil/branding';
import { DaffContainerModule } from '@daffodil/design/container';

import { DaffioFooterComponent } from './footer.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,

    FontAwesomeModule,
    DaffContainerModule,
    DaffLogoModule,
    DaffCopyrightModule,
  ],
  declarations: [
    DaffioFooterComponent,
  ],
  exports: [
    DaffioFooterComponent,
  ],
})
export class DaffioFooterComponentModule {}
