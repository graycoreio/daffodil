import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import { RouterLink } from '@angular/router';

import { DAFF_BREADCRUMB_COMPONENTS } from '@daffodil/design/breadcrumb';

@Component({
  selector: 'iterated-breadcrumb-example',
  templateUrl: './iterated-breadcrumb.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DAFF_BREADCRUMB_COMPONENTS,
    RouterLink,
  ],
})
export class IteratedBreadcrumbExampleComponent {
  breadcrumbs: any[] = [
    { path: '/link', label: 'link' },
    { path: '/link-2', label: 'active link' },
  ];
}
