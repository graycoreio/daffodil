import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DaffioHomeViewComponent } from './home-view.component';
import { DaffioHomeCalloutPlatformsComponentModule } from '../components/home-callout-platforms/home-callout-platforms.module';
import { DaffioHomeCalloutPwaComponentModule } from '../components/home-callout-pwa/home-callout-pwa.module';
import { DaffioHomeHeroComponentModule } from '../components/home-hero/home-hero.module';
import { DaffioHomeHeaderModule } from '../containers/header/header.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,

    DaffioHomeHeroComponentModule,
    DaffioHomeCalloutPwaComponentModule,
    DaffioHomeCalloutPlatformsComponentModule,
    DaffioHomeHeaderModule,
  ],
  declarations: [
    DaffioHomeViewComponent,
  ],
  exports: [
    DaffioHomeViewComponent,
  ],
})
export class DaffioHomeViewModule { }
