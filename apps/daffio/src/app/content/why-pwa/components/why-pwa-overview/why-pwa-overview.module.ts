import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import {
  DaffContainerModule,
  DaffCalloutModule,
  DaffCardModule,
} from '@daffodil/design';

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
