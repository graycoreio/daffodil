import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import {
  DaffCalloutModule,
  DaffListModule,
} from '@daffodil/design';
import { DaffContainerModule } from '@daffodil/design/container';

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
