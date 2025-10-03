import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
} from '@angular/core';

import { DAFF_CALLOUT_COMPONENTS } from '@daffodil/design/callout';
import { DAFF_CARD_COMPONENTS } from '@daffodil/design/card';
import { DAFF_CONTAINER_COMPONENTS } from '@daffodil/design/container';

@Component({
  selector: 'daffio-why-pwa-examples',
  templateUrl: './why-pwa-examples.component.html',
  styleUrls: ['./why-pwa-examples.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DAFF_CONTAINER_COMPONENTS,
    DAFF_CALLOUT_COMPONENTS,
    DAFF_CARD_COMPONENTS,
  ],
})

export class DaffioWhyPwaExamplesComponent {
  @HostBinding('class.daffio-why-pwa-examples') class = true;
}
