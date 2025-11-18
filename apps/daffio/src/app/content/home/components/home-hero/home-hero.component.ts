import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

import { DAFF_BRANDING_CONSTANTS } from '@daffodil/branding';
import { DAFF_BUTTON_COMPONENTS } from '@daffodil/design/button';
import { DAFF_CONTAINER_COMPONENTS } from '@daffodil/design/container';
import { DAFF_HERO_COMPONENTS } from '@daffodil/design/hero';

@Component({
  selector: 'daffio-home-hero',
  templateUrl: './home-hero.component.html',
  styleUrls: ['./home-hero.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DAFF_HERO_COMPONENTS,
    DAFF_CONTAINER_COMPONENTS,
    DAFF_BUTTON_COMPONENTS,
  ],
})

export class DaffioHomeHeroComponent {
  repoLink = DAFF_BRANDING_CONSTANTS.REPO_URL;
  demoLink = DAFF_BRANDING_CONSTANTS.DEMO_URL;
}
