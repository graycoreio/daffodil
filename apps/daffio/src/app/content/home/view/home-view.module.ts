import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DaffStickyTrackerDirective } from '@daffodil/design';

import { DaffioHomeViewComponent } from './home-view.component';
import { DaffioMarketingHeaderContainerModule } from '../../../core/header/containers/marketing-header/marketing-header.module';
import { DaffioHomeCalloutPlatformsComponentModule } from '../components/home-callout-platforms/home-callout-platforms.module';
import { DaffioHomeCalloutPwaComponentModule } from '../components/home-callout-pwa/home-callout-pwa.module';
import { DaffioHomeHeroComponentModule } from '../components/home-hero/home-hero.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,

    DaffioHomeHeroComponentModule,
    DaffioHomeCalloutPwaComponentModule,
    DaffioHomeCalloutPlatformsComponentModule,
    DaffioMarketingHeaderContainerModule,
    DaffStickyTrackerDirective,
  ],
  declarations: [
    DaffioHomeViewComponent,
  ],
  exports: [
    DaffioHomeViewComponent,
  ],
})
export class DaffioHomeViewModule { }
