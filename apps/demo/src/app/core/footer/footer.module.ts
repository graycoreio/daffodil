import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { DaffListModule } from '@daffodil/design';
import { DaffButtonModule } from '@daffodil/design/button';
import { DaffContainerModule } from '@daffodil/design/container';

import { FooterComponent } from './footer.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,

    DaffListModule,
    DaffButtonModule,
    DaffContainerModule,
    FontAwesomeModule,
  ],
  declarations: [
    FooterComponent,
  ],
  exports: [
    FooterComponent,
  ],
})
export class FooterModule {}
