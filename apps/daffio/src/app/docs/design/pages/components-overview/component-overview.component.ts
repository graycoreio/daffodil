import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import { RouterLink } from '@angular/router';

import { DAFF_CARD_COMPONENTS } from '@daffodil/design/card';
import { DAFF_CONTAINER_COMPONENTS } from '@daffodil/design/container';
import { DAFF_HERO_COMPONENTS } from '@daffodil/design/hero';

@Component({
  selector: 'daffio-docs-design-component-overview',
  templateUrl: './component-overview.component.html',
  styleUrls: ['./component-overview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    RouterLink,
    DAFF_CARD_COMPONENTS,
    DAFF_HERO_COMPONENTS,
    DAFF_CONTAINER_COMPONENTS,
  ],
})
export class DaffioDocsDesignComponentOverviewPageComponent { }
