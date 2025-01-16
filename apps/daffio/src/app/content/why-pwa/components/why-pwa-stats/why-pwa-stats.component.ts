import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
} from '@angular/core';
import {
  faChartBar,
  faFileAlt,
} from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'daffio-why-pwa-stats',
  templateUrl: './why-pwa-stats.component.html',
  styleUrls: ['./why-pwa-stats.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})

export class DaffioWhyPwaStatsComponent {
  faFileAlt = faFileAlt;
  faChartBar = faChartBar;
  @HostBinding('class.daffio-why-pwa-stats') class = true;
}
