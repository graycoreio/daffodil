import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import {
  DaffContainerModule,
  DaffCalloutModule,
  DaffListModule,
} from '@daffodil/design';

import { DaffioWhyPwaSolutionComponent } from './why-pwa-solution.component';
import { DaffioFeatureComparisonModule } from '../feature-comparison/feature-comparison.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,

    DaffContainerModule,
    DaffCalloutModule,
    DaffListModule,
    DaffioFeatureComparisonModule,
  ],
  exports: [
    DaffioWhyPwaSolutionComponent,
  ],
  declarations: [
    DaffioWhyPwaSolutionComponent,
  ],
})

export class DaffioWhyPwaSolutionComponentModule {}
