import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { DaffCalloutModule } from '@daffodil/design/callout';
import { DaffCardModule } from '@daffodil/design/card';
import { DaffContainerModule } from '@daffodil/design/container';

import { DaffioWhyPwaStatsComponent } from './why-pwa-stats.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,

    DaffContainerModule,
    DaffCalloutModule,
    DaffCardModule,

    FontAwesomeModule,
  ],
  exports: [
    DaffioWhyPwaStatsComponent,
  ],
  declarations: [
    DaffioWhyPwaStatsComponent,
  ],
})

export class DaffioWhyPwaStatsComponentModule {}
