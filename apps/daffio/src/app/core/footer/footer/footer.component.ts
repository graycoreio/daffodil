import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faGithub,
  faDiscord,
} from '@fortawesome/free-brands-svg-icons';

import {
  DAFF_BRANDING_CONSTANTS,
  DaffCopyrightModule,
  DaffLogoModule,
} from '@daffodil/branding';
import { DAFF_CONTAINER_COMPONENTS } from '@daffodil/design/container';

@Component({
  selector: 'daffio-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    FontAwesomeModule,
    DAFF_CONTAINER_COMPONENTS,
    DaffLogoModule,
    DaffCopyrightModule,
    RouterLink,
  ],
})
export class DaffioFooterComponent {

  @HostBinding('class.daffio-footer') class = true;

  links: any[] = [
    { path: '/docs', title: 'Docs' },
    { path: '/support', title: 'Support' },
  ];

  socialLinks: any[] = [
    { link: DAFF_BRANDING_CONSTANTS.REPO_URL, title: 'Github',  icon: faGithub },
    { link: DAFF_BRANDING_CONSTANTS.DISCORD_URL, title: 'Discord', icon: faDiscord },
  ];
}
