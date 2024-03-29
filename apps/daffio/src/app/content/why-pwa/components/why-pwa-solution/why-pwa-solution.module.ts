import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DaffCalloutModule } from '@daffodil/design/callout';
import { DaffContainerModule } from '@daffodil/design/container';
import { DaffListModule } from '@daffodil/design/list';

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
