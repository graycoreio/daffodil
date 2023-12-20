import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DaffButtonModule } from '@daffodil/design/button';
import { DaffCalloutModule } from '@daffodil/design/callout';
import { DaffCardModule } from '@daffodil/design/card';
import { DaffContainerModule } from '@daffodil/design/container';
import { DaffImageModule } from '@daffodil/design/image';

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
