import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import {
  DaffContainerModule,
  DaffCalloutModule,
  DaffImageModule,
} from '@daffodil/design';

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
