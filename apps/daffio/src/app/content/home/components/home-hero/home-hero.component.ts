import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
} from '@angular/core';

import { DAFF_BRANDING_CONSTANTS } from '@daffodil/branding';
import { DAFF_BUTTON_COMPONENTS } from '@daffodil/design/button';
import { DAFF_CONTAINER_COMPONENTS } from '@daffodil/design/container';
import { DAFF_HERO_COMPONENTS } from '@daffodil/design/hero';
import { DAFF_IMAGE_COMPONENTS } from '@daffodil/design/image';

@Component({
  selector: 'daffio-home-hero',
  templateUrl: './home-hero.component.html',
  styleUrls: ['./home-hero.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DAFF_HERO_COMPONENTS,
    DAFF_IMAGE_COMPONENTS,
    DAFF_CONTAINER_COMPONENTS,
    DAFF_BUTTON_COMPONENTS,
  ],
})

export class DaffioHomeHeroComponent {
  @HostBinding('class.daffio-home-hero') class = true;

  repoLink = DAFF_BRANDING_CONSTANTS.REPO_URL;
  discordLink = DAFF_BRANDING_CONSTANTS.DISCORD_URL;
}
