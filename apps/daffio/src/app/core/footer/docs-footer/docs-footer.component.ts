import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
} from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import {
  faGithub,
  faDiscord,
} from '@fortawesome/free-brands-svg-icons';

import {
  DAFF_BRANDING_CONSTANTS,
  DaffCopyrightModule,
} from '@daffodil/branding';
import { DaffManageContainerLayoutDirective } from '@daffodil/design';
import { DAFF_CONTAINER_COMPONENTS } from '@daffodil/design/container';

@Component({
  selector: 'daffio-docs-footer',
  templateUrl: './docs-footer.component.html',
  styleUrls: ['./docs-footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DAFF_CONTAINER_COMPONENTS,
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
    { path: DAFF_BRANDING_CONSTANTS.DISCORD_URL, title: 'Support' },
    { path: 'https://github.com/graycoreio/daffodil/blob/develop/CONTRIBUTING.md', title: 'Contributing' },
    { path: 'https://github.com/sponsors/graycoreio', title: 'Sponsor' },
    { path: 'https://github.com/graycoreio/daffodil/issues', title: 'Report an issue' },
  ];

  socialLinks: any[] = [
    { title: 'GitHub',  icon: faGithub },
    { title: 'Discord', icon: faDiscord },
  ];
}
