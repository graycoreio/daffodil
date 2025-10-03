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

import { DAFF_CALLOUT_COMPONENTS } from '@daffodil/design/callout';
import { DAFF_CARD_COMPONENTS } from '@daffodil/design/card';
import { DAFF_CONTAINER_COMPONENTS } from '@daffodil/design/container';



@Component({
  selector: 'daffio-why-pwa-overview',
  templateUrl: './why-pwa-overview.component.html',
  styleUrls: ['./why-pwa-overview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DAFF_CONTAINER_COMPONENTS,
    DAFF_CALLOUT_COMPONENTS,
    DAFF_CARD_COMPONENTS,
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
