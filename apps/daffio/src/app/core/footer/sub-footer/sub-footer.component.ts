import {
  Component,
  ViewEncapsulation,
  HostBinding,
  ChangeDetectionStrategy,
} from '@angular/core';

import { DAFF_BRANDING_CONSTANTS } from '@daffodil/branding';

@Component({
  selector: 'daffio-sub-footer',
  templateUrl: './sub-footer.component.html',
  styleUrls: ['./sub-footer.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class DaffioSubFooterComponent {
  @HostBinding('class.daffio-sub-footer') class = true;

  repoLink = DAFF_BRANDING_CONSTANTS.REPO_URL;
  discordLink = DAFF_BRANDING_CONSTANTS.DISCORD_URL;
}
