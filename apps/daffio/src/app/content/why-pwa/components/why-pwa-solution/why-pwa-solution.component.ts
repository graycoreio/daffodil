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
  selector: 'daffio-why-pwa-solution',
  templateUrl: './why-pwa-solution.component.html',
  styleUrls: ['./why-pwa-solution.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})

export class DaffioWhyPwaSolutionComponent {
  @HostBinding('class.daffio-why-pwa-solution') class = true;
}
