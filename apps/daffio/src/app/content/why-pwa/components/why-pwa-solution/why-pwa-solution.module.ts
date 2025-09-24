import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DaffCalloutModule } from '@daffodil/design/callout';
import { DaffContainerModule } from '@daffodil/design/container';
import { DaffListModule } from '@daffodil/design/list';

import { DaffioWhyPwaSolutionComponent } from './why-pwa-solution.component';
import { DaffioFeatureComparisonComponent } from '../feature-comparison/feature-comparison.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,

    DaffContainerModule,
    DaffCalloutModule,
    DaffListModule,
    DaffioFeatureComparisonComponent,
  ],
  exports: [
    DaffioWhyPwaSolutionComponent,
  ],
  declarations: [
    DaffioWhyPwaSolutionComponent,
  ],
})

export class DaffioWhyPwaSolutionComponentModule {}
