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

import { DAFF_CALLOUT_COMPONENTS } from '@daffodil/design/callout';
import { DAFF_CARD_COMPONENTS } from '@daffodil/design/card';
import { DAFF_CONTAINER_COMPONENTS } from '@daffodil/design/container';

@Component({
  selector: 'daffio-why-pwa-stats',
  templateUrl: './why-pwa-stats.component.html',
  styleUrls: ['./why-pwa-stats.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DAFF_CONTAINER_COMPONENTS,
    DAFF_CALLOUT_COMPONENTS,
    DAFF_CARD_COMPONENTS,
    FontAwesomeModule,
  ],
})

export class DaffioWhyPwaStatsComponent {
  faFileAlt = faFileAlt;
  faChartBar = faChartBar;
  @HostBinding('class.daffio-why-pwa-stats') class = true;
}
