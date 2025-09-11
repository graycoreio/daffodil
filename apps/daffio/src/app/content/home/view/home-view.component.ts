import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

import { DaffioHomeCalloutPlatformsComponent } from '../components/home-callout-platforms/home-callout-platforms.component';
import { DaffioHomeCalloutPwaComponent } from '../components/home-callout-pwa/home-callout-pwa.component';
import { DaffioHomeHeroComponent } from '../components/home-hero/home-hero.component';

@Component({
  selector: 'daffio-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DaffioHomeHeroComponent,
    DaffioHomeCalloutPwaComponent,
    DaffioHomeCalloutPlatformsComponent,
  ],
})
export class DaffioHomeViewComponent {}
