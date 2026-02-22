import {
  Component,
  ViewEncapsulation,
  HostBinding,
  ChangeDetectionStrategy,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { DAFF_BRANDING_CONSTANTS } from '@daffodil/branding';
import {
  DAFF_BASIC_BUTTON_COMPONENTS,
  DAFF_STROKED_BUTTON_COMPONENTS,
} from '@daffodil/design/button';
import { DAFF_CALLOUT_COMPONENTS } from '@daffodil/design/callout';
import { DAFF_CONTAINER_COMPONENTS } from '@daffodil/design/container';

@Component({
  selector: 'daffio-sub-footer',
  templateUrl: './sub-footer.component.html',
  styleUrls: ['./sub-footer.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    RouterLink,
    FontAwesomeModule,
    DAFF_CALLOUT_COMPONENTS,
    DAFF_CONTAINER_COMPONENTS,
    DAFF_BASIC_BUTTON_COMPONENTS,
    DAFF_STROKED_BUTTON_COMPONENTS,
  ],
})
export class DaffioSubFooterComponent {
  @HostBinding('class.daffio-sub-footer') class = true;

  docsLink = DAFF_BRANDING_CONSTANTS.DOCS_INTRO_URL;
  discordLink = DAFF_BRANDING_CONSTANTS.DISCORD_URL;
}
