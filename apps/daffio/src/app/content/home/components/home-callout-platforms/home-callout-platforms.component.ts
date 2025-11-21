import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
} from '@angular/core';

import { DAFF_CALLOUT_COMPONENTS } from '@daffodil/design/callout';
import { DAFF_CONTAINER_COMPONENTS } from '@daffodil/design/container';
import { DAFF_IMAGE_COMPONENTS } from '@daffodil/design/image';
import {
  DAFF_SF_CAROUSEL_COMPONENTS,
  DaffSfCarouselOptions,
} from '@daffodil/storefront/carousel';

@Component({
  selector: 'daffio-home-callout-platforms',
  templateUrl: './home-callout-platforms.component.html',
  styleUrls: ['./home-callout-platforms.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DAFF_CALLOUT_COMPONENTS,
    DAFF_IMAGE_COMPONENTS,
    DAFF_CONTAINER_COMPONENTS,
    DAFF_SF_CAROUSEL_COMPONENTS,
  ],
})

export class DaffioHomeCalloutPlatformsComponent {
  @HostBinding('class.daffio-home-callout-platforms') class = true;

  options: DaffSfCarouselOptions = {
    spaceBetween: 8,
  };

  carouselItemId(index: number, value: number): number {
    return value;
  }
}
