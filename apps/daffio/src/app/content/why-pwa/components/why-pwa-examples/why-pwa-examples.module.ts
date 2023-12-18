import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DaffCardModule } from '@daffodil/design';
import { DaffCalloutModule } from '@daffodil/design/callout';
import { DaffContainerModule } from '@daffodil/design/container';

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
