import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import { RouterLink } from '@angular/router';

import { DAFF_BRANDING_CONSTANTS } from '@daffodil/branding';
import { DAFF_BUTTON_COMPONENTS } from '@daffodil/design/button';
import { DAFF_CONTAINER_COMPONENTS } from '@daffodil/design/container';
import { DAFF_HERO_COMPONENTS } from '@daffodil/design/hero';
import { DAFF_DOCS_PATH } from '@daffodil/docs-utils';

@Component({
  selector: 'daffio-home-hero',
  templateUrl: './home-hero.component.html',
  styleUrls: ['./home-hero.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    RouterLink,
    DAFF_HERO_COMPONENTS,
    DAFF_CONTAINER_COMPONENTS,
    DAFF_BUTTON_COMPONENTS,
  ],
})

export class DaffioHomeHeroComponent {
  docsLink = DAFF_DOCS_PATH;
  demoLink = DAFF_BRANDING_CONSTANTS.DEMO_URL;
}
