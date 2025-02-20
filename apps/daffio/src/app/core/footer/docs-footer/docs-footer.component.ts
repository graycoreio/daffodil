import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import {
  faGithub,
  faDiscord,
} from '@fortawesome/free-brands-svg-icons';

import {
  DAFF_BRANDING_CONSTANTS,
  DaffCopyrightModule,
  DaffLogoModule,
} from '@daffodil/branding';
import { DaffManageContainerLayoutDirective } from '@daffodil/design';
import { DAFF_CONTAINER_COMPONENTS } from '@daffodil/design/container';

@Component({
  selector: 'daffio-docs-footer',
  templateUrl: './docs-footer.component.html',
  styleUrls: ['./docs-footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    RouterLink,
    DAFF_CONTAINER_COMPONENTS,
    DaffLogoModule,
    FaIconComponent,
    DaffCopyrightModule,
  ],
  hostDirectives: [
    { directive: DaffManageContainerLayoutDirective },
  ],
})
export class DaffioDocsFooterComponent {

  @HostBinding('class.daffio-docs-footer') class = true;

  links: any[] = [
    { path: 'mailto:hello@graycore.io', title: 'Contact' },
    { path: 'https://github.com/sponsors/graycoreio', title: 'Sponsor' },
    { path: 'https://github.com/graycoreio/daffodil/issues', title: 'Report an issue' },
  ];

  socialLinks: any[] = [
    { link: DAFF_BRANDING_CONSTANTS.REPO_URL, title: 'GitHub',  icon: faGithub },
    { link: DAFF_BRANDING_CONSTANTS.DISCORD_URL, title: 'Discord', icon: faDiscord },
  ];
}
