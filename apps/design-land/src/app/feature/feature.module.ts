import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DaffFeatureModule } from '@daffodil/design';

import { DesignLandFeatureRoutingModule } from './feature-routing.module';
import { DesignLandFeatureComponent } from './feature.component';



@NgModule({
  declarations: [
    DesignLandFeatureComponent,
  ],
  imports: [
    CommonModule,
    DesignLandFeatureRoutingModule,

    DaffFeatureModule,
  ],
})
export class DesignLandFeatureModule { }
