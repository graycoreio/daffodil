import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
} from '@angular/core';
import {
  faComments,
  faLink,
  faRocket,
  faShieldAlt,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'daffio-why-pwa-overview',
  templateUrl: './why-pwa-overview.component.html',
  styleUrls: ['./why-pwa-overview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})

export class DaffioWhyPwaOverviewComponent {
  faRocket = faRocket;
  faLink = faLink;
  faShieldAlt = faShieldAlt;
  faComments = faComments;

  @HostBinding('class.daffio-why-pwa-overview') class = true;
}
