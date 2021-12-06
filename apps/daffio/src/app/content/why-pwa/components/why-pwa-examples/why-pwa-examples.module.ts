import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import {
  DaffContainerModule,
  DaffCalloutModule,
  DaffCardModule,
} from '@daffodil/design';

import { DaffioWhyPwaExamplesComponent } from './why-pwa-examples.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,

    DaffContainerModule,
    DaffCalloutModule,
    DaffCardModule,
  ],
  exports: [
    DaffioWhyPwaExamplesComponent,
  ],
  declarations: [
    DaffioWhyPwaExamplesComponent,
  ],
})

export class DaffioWhyPwaExamplesComponentModule {}
