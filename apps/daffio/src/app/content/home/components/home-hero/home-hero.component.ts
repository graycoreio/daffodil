import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
} from '@angular/core';

import { DAFF_BRANDING_CONSTANTS } from '@daffodil/branding';

@Component({
  selector: 'daffio-home-hero',
  templateUrl: './home-hero.component.html',
  styleUrls: ['./home-hero.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})

export class DaffioHomeHeroComponent {
  @HostBinding('class.daffio-home-hero') class = true;

  repoLink = DAFF_BRANDING_CONSTANTS.REPO_URL;
  discordLink = DAFF_BRANDING_CONSTANTS.DISCORD_URL;
}
