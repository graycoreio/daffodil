import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { DaffCalloutModule } from '@daffodil/design/callout';
import { DaffCardModule } from '@daffodil/design/card';
import { DaffContainerModule } from '@daffodil/design/container';

import { DaffioWhyPwaOverviewComponent } from './why-pwa-overview.component';

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
    DaffioWhyPwaOverviewComponent,
  ],
  declarations: [
    DaffioWhyPwaOverviewComponent,
  ],
})

export class DaffioWhyPwaOverviewComponentModule {}
