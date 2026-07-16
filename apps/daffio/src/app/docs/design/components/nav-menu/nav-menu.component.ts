import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { DaffioHeaderItemDirective } from 'apps/daffio/src/app/core/header/components/header-item/header-item.directive';

import { DAFF_MENU_COMPONENTS } from '@daffodil/design/menu';

@Component({
  selector: 'daffio-docs-design-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrl: './nav-menu.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DaffioHeaderItemDirective,
    RouterLink,
    DAFF_MENU_COMPONENTS,
  ],
})
export class DaffioDocsDesignNavMenuComponent {
}
