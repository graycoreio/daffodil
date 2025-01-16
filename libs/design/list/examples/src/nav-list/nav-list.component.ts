import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

import { DAFF_LIST_COMPONENTS } from '@daffodil/design/list';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'nav-list',
  templateUrl: './nav-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DAFF_LIST_COMPONENTS,
    FaIconComponent,
  ],
})
export class NavListComponent {
  faChevronRight = faChevronRight;
}
