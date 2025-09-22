import { NgFor } from '@angular/common';
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
import { DaffContainerModule } from '@daffodil/design/container';

@Component({
  selector: 'daffio-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    FontAwesomeModule,
    DaffContainerModule,
    DaffLogoModule,
    DaffCopyrightModule,
    NgFor,
    RouterLink,
  ],
})
export class DaffioFooterComponent {

  @HostBinding('class.daffio-footer') class = true;

  links: any[] = [
    { path: '/why-pwa', title: 'Why PWA' },
    { path: '/docs', title: 'Docs' },
    { path: '/support', title: 'Support' },
  ];

  socialLinks: any[] = [
    { link: DAFF_BRANDING_CONSTANTS.REPO_URL, title: 'Github',  icon: faGithub },
    { link: DAFF_BRANDING_CONSTANTS.DISCORD_URL, title: 'Discord', icon: faDiscord },
  ];
}
