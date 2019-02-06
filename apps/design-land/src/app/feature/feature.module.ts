import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DaffFeatureModule } from '@daffodil/design';

import { DesignLandFeatureRoutingModule } from './feature-routing.module';

import { FeatureComponent } from './feature.component';

@NgModule({
  declarations: [
    FeatureComponent
  ],
  imports: [
    CommonModule,
    DaffFeatureModule,
    DesignLandFeatureRoutingModule
  ]
})
export class FeatureModule { }
