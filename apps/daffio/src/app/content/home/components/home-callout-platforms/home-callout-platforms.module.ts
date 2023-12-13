import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import {
  DaffCalloutModule,
  DaffImageModule,
} from '@daffodil/design';
import { DaffContainerModule } from '@daffodil/design/container';

import { DaffioHomeCalloutPlatformsComponent } from './home-callout-platforms.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,

    DaffContainerModule,
    DaffCalloutModule,
    DaffImageModule,
  ],
  exports: [
    DaffioHomeCalloutPlatformsComponent,
  ],
  declarations: [
    DaffioHomeCalloutPlatformsComponent,
  ],
})

export class DaffioHomeCalloutPlatformsComponentModule {}
