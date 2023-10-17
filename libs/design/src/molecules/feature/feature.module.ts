import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DaffFeatureComponent } from './feature/feature.component';
import { DaffFeatureIconDirective } from './feature-icon/feature-icon.directive';
import { DaffFeatureSubheaderDirective } from './feature-subheader/feature-subheader.directive';
import { DaffFeatureSubtitleDirective } from './feature-subtitle/feature-subtitle.directive';
import { DaffFeatureTitleDirective } from './feature-title/feature-title.directive';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    DaffFeatureComponent,
    DaffFeatureTitleDirective,
    DaffFeatureSubtitleDirective,
    DaffFeatureIconDirective,
    DaffFeatureSubheaderDirective,
  ],
  exports: [
    DaffFeatureComponent,
    DaffFeatureTitleDirective,
    DaffFeatureSubtitleDirective,
    DaffFeatureIconDirective,
    DaffFeatureSubheaderDirective,
  ],
})
export class DaffFeatureModule { }
