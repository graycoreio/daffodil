import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import {
  DaffListModule,
  DaffButtonModule,
  DaffContainerModule,
} from '@daffodil/design';

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
