import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

import { DAFF_PAGINATOR_COMPONENTS } from '@daffodil/design/paginator';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'basic-paginator',
  templateUrl: './basic-paginator.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DAFF_PAGINATOR_COMPONENTS,
  ],
})
export class BasicPaginatorComponent {
  numberOfPages = 15;
  currentPage = 2;

  onPageChange(pageNumber: number) {
    this.currentPage = pageNumber;
  }
}
