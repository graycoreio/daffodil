import {
  Component,
  ChangeDetectionStrategy,
  input,
  output,
  computed,
} from '@angular/core';
import {
  Params,
  RouterLink,
} from '@angular/router';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import {
  faChevronRight,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons';

import {
  DaffPaginatorNumberOfPagesErrorMessage,
  DaffPaginatorPageOutOfRangeErrorMessage,
} from '../utils/paginator-errors';

const visiblePageRange = 2;

@Component({
  selector: 'daff-paginator',
  templateUrl: './paginator.component.html',
  styleUrl: './paginator.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'daff-paginator',
    role: 'navigation',
  },
  imports: [
    FaIconComponent,
    RouterLink,
  ],
})
export class DaffPaginatorComponent {
  /**
   * @docs-private
   */
  faChevronRight = faChevronRight;
  /**
   * @docs-private
   */
  faChevronLeft = faChevronLeft;

  /**
   * The total number of pages the paginator tracks. This number can change dynamically, but the end user is responsible for keeping `numberOfPages`
   * and `currentPage` in sync.
   *
   * For example, if the `numberOfPages` is dynamically changed to a value less than the `currentPage`, the paginator will break.
   */
  numberOfPages = input.required<number>();

  /**
   * The currently selected page.
   */
  currentPage = input.required<number>();

  /**
   * Replace the paginator buttons with links. `url` is required if using this mode.
   */
  linkMode = input(false);

  /**
   * The url to which to navigate if the paginator is in link mode.
   * This paginator component will set the page query param.
   */
  url = input<string>();

  /**
   * The query param to which the paginator component will set the current page value in link mode.
   */
  queryParam = input('page');

  /**
   * Emits when the current page changes with the new current page.
   */
  notifyPageChange = output<any>();

  /**
   * @docs-private
   */
  _numberOfPagesArray = computed<number[]>(() => {
    const numberOfPages = this.numberOfPages();

    if(numberOfPages < 1) {
      throw new Error(DaffPaginatorNumberOfPagesErrorMessage);
    } else if(numberOfPages < this.currentPage()) {
      throw new Error(DaffPaginatorPageOutOfRangeErrorMessage);
    }

    return numberOfPages < 2 ? [] : Array(numberOfPages-2).fill(numberOfPages-2).map((x,i)=>i+2);
  });

  /**
   * Determines when ellipsis after the first page number should show.
   *
   * @docs-private
   */
  _showFirstEllipsis = computed<boolean>(() => this.currentPage() >= visiblePageRange+2);

  /**
   * Determines when ellipsis before the final page number should show.
   *
   * @docs-private
   */
  _showLastEllipsis = computed<boolean>(() => this.currentPage() < (this.numberOfPages() - visiblePageRange));

  /**
   * Determines when the Previous button should be disabled.
   *
   * @docs-private
   */
  _disablePrev = computed<boolean>(() => this.currentPage() === 1);

  /**
   * Determines when the Next button should be disabled.
   *
   * @docs-private
   */
  _disableNext = computed<boolean>(() => this.currentPage() === this.numberOfPages());

  /**
   * Emits the previous page number through notifyPageChange Output.
   *
   * @docs-private
   */
  _onNotifyPrevPageChange() {
    this.notifyPageChange.emit(this.currentPage() - 1);
  }

  /**
   * Emits the next page number through notifyPageChange Output.
   *
   * @docs-private
   */
  _onNotifyNextPageChange() {
    this.notifyPageChange.emit(this.currentPage() + 1);
  }

  /**
   * Emits a pageNumber to notifyPageChange Output.
   *
   * @docs-private
   */
  _onNotifyPageChange(pageNumber: number) {
    this.notifyPageChange.emit(pageNumber);
  }

  /**
   * A simple function that determines if the given page number is the current page number.
   *
   * @docs-private
   */
  _isSelected(page: number): boolean {
    return page === this.currentPage();
  }

  /**
   * Determines if the given page number should be shown. The two additional 'or' conditionals are needed
   * so the paginator retains the same total width at the extreme page numbers (1 and numberOfPages).
   *
   * @docs-private
   */
  _showNumber(pageNumber: number): boolean {
    return Math.abs(this.currentPage() - pageNumber) < visiblePageRange
      || (this.currentPage() <= visiblePageRange && pageNumber <= 2*visiblePageRange)
      || (this.currentPage() > this.numberOfPages() - visiblePageRange && pageNumber > this.numberOfPages() - 2*visiblePageRange);
  }

  /**
   * @docs-private
   */
  _buildPageQueryParams(page: number): Params {
    return {
      [this.queryParam()]: page,
    };
  }
}
