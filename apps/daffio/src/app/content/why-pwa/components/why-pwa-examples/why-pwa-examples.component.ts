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
  selector: 'daffio-why-pwa-examples',
  templateUrl: './why-pwa-examples.component.html',
  styleUrls: ['./why-pwa-examples.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})

export class DaffioWhyPwaExamplesComponent {
  @HostBinding('class.daffio-why-pwa-examples') class = true;
}
