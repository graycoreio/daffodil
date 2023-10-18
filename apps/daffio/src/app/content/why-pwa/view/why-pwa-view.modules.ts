import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DaffioWhyPwaViewComponent } from './why-pwa-view.component';
import { DaffioWhyPwaExamplesComponentModule } from '../components/why-pwa-examples/why-pwa-examples.module';
import { DaffioWhyPwaHeroComponentModule } from '../components/why-pwa-hero/why-pwa-hero.module';
import { DaffioWhyPwaOverviewComponentModule } from '../components/why-pwa-overview/why-pwa-overview.module';
import { DaffioWhyPwaSolutionComponentModule } from '../components/why-pwa-solution/why-pwa-solution.module';
import { DaffioWhyPwaStatsComponentModule } from '../components/why-pwa-stats/why-pwa-stats.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,

    DaffioWhyPwaHeroComponentModule,
    DaffioWhyPwaOverviewComponentModule,
    DaffioWhyPwaStatsComponentModule,
    DaffioWhyPwaExamplesComponentModule,
    DaffioWhyPwaSolutionComponentModule,
  ],
  declarations: [
    DaffioWhyPwaViewComponent,
  ],
  exports: [
    DaffioWhyPwaViewComponent,
  ],
})
export class DaffioWhyPwaViewModule { }
