import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import { RouterLink } from '@angular/router';

import { DaffButtonComponent } from '@daffodil/design/button';
import { DAFF_CONTAINER_COMPONENTS } from '@daffodil/design/container';
import { DAFF_HERO_COMPONENTS } from '@daffodil/design/hero';

@Component({
  selector: 'daffio-docs-design-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    DAFF_CONTAINER_COMPONENTS,
    DaffButtonComponent,
    DAFF_HERO_COMPONENTS,
    RouterLink,
  ],
})
export class DaffioDocsDesignOverviewPageComponent {}
