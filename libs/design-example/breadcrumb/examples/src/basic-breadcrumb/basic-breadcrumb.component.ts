import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

import { DAFF_BREADCRUMB_COMPONENTS } from '@daffodil/design/breadcrumb';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'basic-breadcrumb',
  templateUrl: './basic-breadcrumb.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DAFF_BREADCRUMB_COMPONENTS,
  ],
})
export class BasicBreadcrumbComponent {}
