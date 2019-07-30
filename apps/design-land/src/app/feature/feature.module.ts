import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureComponent } from './feature.component';
import { DesignLandFeatureRoutingModule } from './feature-routing.module';

import { DaffFeatureModule } from '@daffodil/design';


@NgModule({
  declarations: [
    FeatureComponent
  ],
  imports: [
    CommonModule,
    DesignLandFeatureRoutingModule,

    DaffFeatureModule
  ]
})
export class FeatureModule { }
