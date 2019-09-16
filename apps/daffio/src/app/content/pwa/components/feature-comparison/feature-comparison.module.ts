import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DaffioFeatureComparisonComponent } from './feature-comparison.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  declarations: [
    DaffioFeatureComparisonComponent
  ],
  exports: [
    DaffioFeatureComparisonComponent
  ]
})
export class DaffioFeatureComparisonModule {}
