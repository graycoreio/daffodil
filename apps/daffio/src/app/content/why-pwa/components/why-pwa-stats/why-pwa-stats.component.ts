import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
} from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faChartBar,
  faFileAlt,
} from '@fortawesome/free-regular-svg-icons';

import { DaffCalloutModule } from '@daffodil/design/callout';
import { DaffCardModule } from '@daffodil/design/card';
import { DaffContainerModule } from '@daffodil/design/container';

@Component({
  selector: 'daffio-why-pwa-stats',
  templateUrl: './why-pwa-stats.component.html',
  styleUrls: ['./why-pwa-stats.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DaffContainerModule,
    DaffCalloutModule,
    DaffCardModule,
    FontAwesomeModule,
  ],
})

export class DaffioWhyPwaStatsComponent {
  faFileAlt = faFileAlt;
  faChartBar = faChartBar;
  @HostBinding('class.daffio-why-pwa-stats') class = true;
}
