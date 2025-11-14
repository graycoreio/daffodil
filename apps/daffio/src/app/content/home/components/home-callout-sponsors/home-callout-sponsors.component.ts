import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
} from '@angular/core';

import { DAFF_CALLOUT_COMPONENTS } from '@daffodil/design/callout';
import { DAFF_CONTAINER_COMPONENTS } from '@daffodil/design/container';
import { DAFF_IMAGE_COMPONENTS } from '@daffodil/design/image';

@Component({
  selector: 'daffio-home-callout-sponsors',
  templateUrl: './home-callout-sponsors.component.html',
  styleUrls: ['./home-callout-sponsors.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DAFF_CALLOUT_COMPONENTS,
    DAFF_CONTAINER_COMPONENTS,
    DAFF_IMAGE_COMPONENTS,
  ],
})

export class DaffioHomeCalloutSponsorsComponent {
  @HostBinding('class.daffio-home-callout-sponsors') class = true;
}
