import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

import { DaffioWhyPwaExamplesComponent } from '../components/why-pwa-examples/why-pwa-examples.component';
import { DaffioWhyPwaHeroComponent } from '../components/why-pwa-hero/why-pwa-hero.component';
import { DaffioWhyPwaOverviewComponent } from '../components/why-pwa-overview/why-pwa-overview.component';
import { DaffioWhyPwaSolutionComponent } from '../components/why-pwa-solution/why-pwa-solution.component';
import { DaffioWhyPwaStatsComponent } from '../components/why-pwa-stats/why-pwa-stats.component';

@Component({
  selector: 'daffio-why-pwa-view',
  templateUrl: './why-pwa-view.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DaffioWhyPwaHeroComponent,
    DaffioWhyPwaOverviewComponent,
    DaffioWhyPwaStatsComponent,
    DaffioWhyPwaExamplesComponent,
    DaffioWhyPwaSolutionComponent,
  ],
})
export class DaffioWhyPwaViewComponent {}
