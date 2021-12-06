import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { DaffioFeatureComparisonComponent } from './feature-comparison.component';


@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule,
  ],
  declarations: [
    DaffioFeatureComparisonComponent,
  ],
  exports: [
    DaffioFeatureComparisonComponent,
  ],
})
export class DaffioFeatureComparisonModule {}
