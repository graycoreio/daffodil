import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
} from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faComments,
  faLink,
  faRocket,
  faShieldAlt,
} from '@fortawesome/free-solid-svg-icons';

import { DaffCalloutModule } from '@daffodil/design/callout';
import { DaffCardModule } from '@daffodil/design/card';
import { DaffContainerModule } from '@daffodil/design/container';



@Component({
  selector: 'daffio-why-pwa-overview',
  templateUrl: './why-pwa-overview.component.html',
  styleUrls: ['./why-pwa-overview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DaffContainerModule,
    DaffCalloutModule,
    DaffCardModule,
    FontAwesomeModule,
  ],
})

export class DaffioWhyPwaOverviewComponent {
  faRocket = faRocket;
  faLink = faLink;
  faShieldAlt = faShieldAlt;
  faComments = faComments;

  @HostBinding('class.daffio-why-pwa-overview') class = true;
}
