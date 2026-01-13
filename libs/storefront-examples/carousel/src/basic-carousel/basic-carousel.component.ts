import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

import { DAFF_BASIC_BUTTON_COMPONENTS } from '@daffodil/design/button';
import { DAFF_CARD_COMPONENTS } from '@daffodil/design/card';
import { DAFF_SF_CAROUSEL_COMPONENTS } from '@daffodil/storefront/carousel';

@Component({
  selector: 'basic-carousel-example',
  templateUrl: './basic-carousel.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DAFF_SF_CAROUSEL_COMPONENTS,
    DAFF_CARD_COMPONENTS,
    DAFF_BASIC_BUTTON_COMPONENTS,
  ],
})
export class BasicCarouselStorefrontExampleComponent {}
