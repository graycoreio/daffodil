import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
} from '@angular/core';

import { DAFF_BASIC_BUTTON_COMPONENTS } from '@daffodil/design/button';
import { DAFF_CONTAINER_COMPONENTS } from '@daffodil/design/container';
import { DAFF_HERO_COMPONENTS } from '@daffodil/design/hero';

@Component({
  selector: 'daffio-why-pwa-hero',
  templateUrl: './why-pwa-hero.component.html',
  styleUrls: ['./why-pwa-hero.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DAFF_CONTAINER_COMPONENTS,
    DAFF_HERO_COMPONENTS,
    DAFF_BASIC_BUTTON_COMPONENTS,
  ],
})

export class DaffioWhyPwaHeroComponent {
  @HostBinding('class.daffio-why-pwa-hero') class = true;
}
