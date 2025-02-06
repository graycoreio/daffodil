import {
  NgFor,
  NgIf,
} from '@angular/common';
import {
  Component,
  Input,
  Output,
  EventEmitter,
  HostBinding,
  ElementRef,
  OnChanges,
  ChangeDetectionStrategy,
} from '@angular/core';
import {
  Params,
  RouterModule,
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
  styleUrls: ['./paginator.component.scss'],
  templateUrl: './paginator.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    FaIconComponent,
    RouterModule,
    NgIf,
    NgFor,
  ],
})
export class DaffPaginatorComponent implements OnChanges {

  /**
   * @docs-private
   */
  @HostBinding('class.daff-paginator') class = true;
  /**
   * @docs-private
   */
  @HostBinding('attr.role') role = 'navigation';

  /**
   * @docs-private
   */
  faChevronRight = faChevronRight;
  /**
   * @docs-private
   */
  faChevronLeft = faChevronLeft;

  /**
   * @docs-private
   */
  _paginatorId: string;

  constructor(private elementRef: ElementRef) {
    const ariaLabel = elementRef.nativeElement.attributes['aria-label'];
    this._paginatorId = ariaLabel ? ariaLabel.nodeValue : null;
  }

  /**
   * The total number of pages the paginator tracks. This number can change dynamically, but the end user is responsible for keeping numberOfPages
   * and currentPage in sync. For example, if the numberOfPages is dynamically changed to a value less than the currentPage, the paginator will break.
   */
  @Input() numberOfPages: number;

  /**
   * The currently selected page.
   */
  @Input() currentPage: number;

  /**
   * Replace the paginator buttons with links. `url` is required if using this mode.
   */
  @Input() linkMode = false;

  /**
   * The url to which to navigate if the paginator is in link mode.
   * This paginator component will set the page query param.
   */
  @Input() url?: string;

  /**
   * The query param to which the paginator component will set the current page value in link mode.
   */
  @Input() queryParam = 'page';

  /**
   * @docs-private
   */
  _numberOfPagesArray: number[];

  /**
   * Emits when the current page changes with the new current page.
   */
  @Output() notifyPageChange: EventEmitter<any> = new EventEmitter();

  /**
   * Determines when ellipsis after the first page number should show.
   *
   * @docs-private
   */
  get _showFirstEllipsis(): boolean {
    return this.currentPage >= visiblePageRange+2;
  }

  /**
   * Determines when ellipsis before the final page number should show.
   *
   * @docs-private
   */
  get _showLastEllipsis(): boolean {
    return this.currentPage < (this.numberOfPages - visiblePageRange);
  }

  /**
   * Determines when the Previous button should be disabled.
   *
   * @docs-private
   */
  get _disablePrev(): boolean {
    return this.currentPage === 1;
  }

  /**
   * Determines when the Next button should be disabled.
   *
   * @docs-private
   */
  get _disableNext(): boolean {
    return this.currentPage === this.numberOfPages;
  }

  /**
   * @docs-private
   */
  ngOnChanges() {
    if(this.numberOfPages < 1) {
      throw new Error(DaffPaginatorNumberOfPagesErrorMessage);
    } else if(this.numberOfPages < this.currentPage) {
      throw new Error(DaffPaginatorPageOutOfRangeErrorMessage);
    }

    this._numberOfPagesArray = this.numberOfPages < 2 ? [] : Array(this.numberOfPages-2).fill(this.numberOfPages-2).map((x,i)=>i+2);
  }

  /**
   * Emits the previous page number through notifyPageChange Output.
   *
   * @docs-private
   */
  _onNotifyPrevPageChange() {
    this.notifyPageChange.emit(this.currentPage - 1);
  }

  /**
   * Emits the next page number through notifyPageChange Output.
   *
   * @docs-private
   */
  _onNotifyNextPageChange() {
    this.notifyPageChange.emit(this.currentPage + 1);
  }

  /**
   * Emits a pageNumber to notifyPageChange Output.
   *
   * @docs-private
   * @param pageNumber a page number
   */
  _onNotifyPageChange(pageNumber: number) {
    this.notifyPageChange.emit(pageNumber);
  }

  /**
   * A simple function that determines if the given page number is the current page number.
   *
   * @docs-private
   * @param page a page number
   */
  _isSelected(page: number): boolean {
    return page === this.currentPage;
  }

  /**
   * Determines if the given page number should be shown. The two additional 'or' conditionals are needed
   * so the paginator retains the same total width at the extreme page numbers (1 and numberOfPages).
   *
   * @docs-private
   * @param pageNumber page number to check.
   */
  _showNumber(pageNumber: number): boolean {
    return Math.abs(this.currentPage - pageNumber) < visiblePageRange
      || (this.currentPage <= visiblePageRange && pageNumber <= 2*visiblePageRange)
      || (this.currentPage > this.numberOfPages - visiblePageRange && pageNumber > this.numberOfPages - 2*visiblePageRange);
  }

  /**
   * @docs-private
   */
  _buildPageQueryParams(page: number): Params {
    return {
      [this.queryParam]: page,
    };
  }
}
