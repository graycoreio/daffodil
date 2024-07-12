import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

import { DaffPrefixSuffixModule } from '@daffodil/design';
import { DaffListModule } from '@daffodil/design/list';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'nav-list',
  templateUrl: './nav-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    DaffListModule,
    FaIconComponent,
    DaffPrefixSuffixModule,
  ],
})
export class NavListComponent {
  faChevronRight = faChevronRight;
}
