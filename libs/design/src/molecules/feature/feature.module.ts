import { NgModule } from '@angular/core';

import { DaffFeatureComponent } from './feature.component';
import { CommonModule } from '@angular/common';
import { DaffFeatureTitleComponent } from './feature-title/feature-title.component';
import { DaffFeatureBodyComponent } from './feature-body/feature-body.component';
import { DaffFeatureIconComponent } from './feature-icon/feature-icon.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DaffFeatureComponent,
    DaffFeatureTitleComponent,
    DaffFeatureBodyComponent,
    DaffFeatureIconComponent
  ],
  exports: [
    DaffFeatureComponent,
    DaffFeatureTitleComponent,
    DaffFeatureBodyComponent,
    DaffFeatureIconComponent
  ]
})
export class DaffFeatureModule { }
