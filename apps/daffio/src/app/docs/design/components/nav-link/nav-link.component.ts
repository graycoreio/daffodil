import {
  ChangeDetectionStrategy,
  Component,
  input,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { DaffioNavLinkDynamicComponent } from 'apps/daffio/src/app/core/nav/link/dynamic-component.type';

import { DaffMenuModule } from '@daffodil/design/menu';


@Component({
  selector: 'daffio-docs-design-nav-link',
  templateUrl: './nav-link.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DaffMenuModule,
    RouterLink,
  ],
})
export class DaffioDocsDesignNavLinkComponent implements DaffioNavLinkDynamicComponent {
  type = input<'header' | 'list'>();
}
