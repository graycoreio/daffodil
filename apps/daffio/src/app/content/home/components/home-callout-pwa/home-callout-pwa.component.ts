import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
} from '@angular/core';
import { RouterLink } from '@angular/router';

import { DAFF_BUTTON_COMPONENTS } from '@daffodil/design/button';
import { DAFF_CALLOUT_COMPONENTS } from '@daffodil/design/callout';
import { DAFF_CARD_COMPONENTS } from '@daffodil/design/card';
import { DAFF_CONTAINER_COMPONENTS } from '@daffodil/design/container';

@Component({
  selector: 'daffio-home-callout-pwa',
  templateUrl: './home-callout-pwa.component.html',
  styleUrls: ['./home-callout-pwa.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DAFF_CALLOUT_COMPONENTS,
    DAFF_CARD_COMPONENTS,
    DAFF_CONTAINER_COMPONENTS,
    DAFF_BUTTON_COMPONENTS,
    RouterLink,
  ],
})

export class DaffioHomeCalloutPwaComponent {
  @HostBinding('class.daffio-home-callout-pwa') class = true;
}
