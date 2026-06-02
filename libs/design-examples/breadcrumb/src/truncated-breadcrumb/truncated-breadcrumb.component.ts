import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import { RouterLink } from '@angular/router';

import { DAFF_BREADCRUMB_COMPONENTS } from '@daffodil/design/breadcrumb';

@Component({
  selector: 'truncated-breadcrumb-example',
  templateUrl: './truncated-breadcrumb.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DAFF_BREADCRUMB_COMPONENTS,
    RouterLink,
  ],
})
export class TruncatedBreadcrumbExampleComponent {}
