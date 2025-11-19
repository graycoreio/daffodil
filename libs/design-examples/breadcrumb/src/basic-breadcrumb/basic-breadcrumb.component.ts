import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

import { DAFF_BREADCRUMB_COMPONENTS } from '@daffodil/design/breadcrumb';

@Component({
  selector: 'basic-breadcrumb-example',
  templateUrl: './basic-breadcrumb.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DAFF_BREADCRUMB_COMPONENTS,
  ],
})
export class BasicBreadcrumbExampleComponent {}
