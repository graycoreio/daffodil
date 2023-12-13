import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import {
  DaffContainerModule,
  DaffCalloutModule,
  DaffImageModule,
  DaffCardModule,
} from '@daffodil/design';
import { DaffButtonModule } from '@daffodil/design/button';

import { DaffioHomeCalloutPwaComponent } from './home-callout-pwa.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,

    DaffContainerModule,
    DaffCalloutModule,
    DaffButtonModule,
    DaffImageModule,
    DaffCardModule,
  ],
  exports: [
    DaffioHomeCalloutPwaComponent,
  ],
  declarations: [
    DaffioHomeCalloutPwaComponent,
  ],
})

export class DaffioHomeCalloutPwaComponentModule {}
