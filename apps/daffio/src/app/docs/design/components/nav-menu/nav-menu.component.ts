import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { DaffioHeaderItemDirective } from 'apps/daffio/src/app/core/header/components/header-item/header-item.directive';

import { DaffMenuModule } from '@daffodil/design/menu';

@Component({
  selector: 'daffio-docs-design-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrl: './nav-menu.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DaffioHeaderItemDirective,
    DaffMenuModule,
    RouterLink,
  ],
})
export class DaffioDocsDesignNavMenuComponent {
}
