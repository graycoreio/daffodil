import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

import { DaffioHomeCalloutCommerceComponent } from '../components/home-callout-commerce/home-callout-commerce.component';
import { DaffioHomeCalloutPlatformsComponent } from '../components/home-callout-platforms/home-callout-platforms.component';
import { DaffioHomeCalloutSponsorsComponent } from '../components/home-callout-sponsors/home-callout-sponsors.component';
import { DaffioHomeHeroComponent } from '../components/home-hero/home-hero.component';

@Component({
  selector: 'daffio-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DaffioHomeHeroComponent,
    DaffioHomeCalloutPlatformsComponent,
    DaffioHomeCalloutSponsorsComponent,
    DaffioHomeCalloutCommerceComponent,
  ],
})
export class DaffioHomeViewComponent {}
