import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
} from '@angular/core';
import {
  faGithub,
  faDiscord,
} from '@fortawesome/free-brands-svg-icons';

import { DAFF_BRANDING_CONSTANTS } from '@daffodil/branding';

@Component({
  selector: 'daffio-simple-footer',
  templateUrl: './simple-footer.component.html',
  styleUrls: ['./simple-footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class DaffioSimpleFooterComponent {

  @HostBinding('class.daffio-simple-footer') class = true;

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
