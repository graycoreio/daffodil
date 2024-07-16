import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

import { DaffPaginatorModule } from '@daffodil/design/paginator';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'basic-paginator',
  templateUrl: './basic-paginator.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    DaffPaginatorModule,
  ],
})
export class BasicPaginatorComponent {
  numberOfPages = 15;
  currentPage = 2;

  onPageChange(pageNumber: number) {
    this.currentPage = pageNumber;
  }
}
