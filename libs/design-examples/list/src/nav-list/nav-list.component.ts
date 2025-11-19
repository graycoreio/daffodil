import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

import { DAFF_NAV_LIST_COMPONENTS } from '@daffodil/design/list';

@Component({
  selector: 'nav-list-example',
  templateUrl: './nav-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DAFF_NAV_LIST_COMPONENTS,
    FaIconComponent,
  ],
})
export class NavListExampleComponent {
  faChevronRight = faChevronRight;
}
