import { Component, Input, Output, EventEmitter, HostBinding, ElementRef, OnChanges, ChangeDetectionStrategy, Renderer2 } from '@angular/core';

import { daffColorMixin, DaffPalette, DaffColorable } from '../../core/colorable/colorable';

import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

/**
 * An _elementRef and an instance of renderer2 are needed for the Colorable mixin
 */
class DaffPaginatorBase {
  constructor(public _elementRef: ElementRef, public _renderer: Renderer2) {}
}

const _daffPaginatorBase = daffColorMixin(DaffPaginatorBase)

const visiblePageRange = 2;

@Component({
  selector: 'daff-paginator',
  styleUrls: ['./paginator.component.scss'],
  templateUrl: './paginator.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DaffPaginatorComponent extends _daffPaginatorBase implements OnChanges, DaffColorable {
  @HostBinding('class.daff-paginator') class = true;
  @HostBinding('attr.role') role = 'navigation';

  faChevronRight = faChevronRight;
  faChevronLeft = faChevronLeft;

  /**
   * The color theme of the paginator.
   */
  @Input() color: DaffPalette;
  _paginatorId: string;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    super(elementRef, renderer);
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

  _numberOfPagesArray: number[];

  /**
   * Emits when the current page changes with the new current page.
   */
  @Output() notifyPageChange: EventEmitter<any> = new EventEmitter();

  ngOnChanges() {
    this._numberOfPagesArray = Array(this.numberOfPages-2).fill(this.numberOfPages-2).map((x,i)=>i+2);
  }

  /**
   * Emits the previous page number through notifyPageChange Output.
   */
  _onNotifyPrevPageChange() {
    this.notifyPageChange.emit(this.currentPage - 1);
  }

  /**
   * Emits the next page number through notifyPageChange Output.
   */
  _onNotifyNextPageChange() {
    this.notifyPageChange.emit(this.currentPage + 1);
  }

  /**
   * Emits a pageNumber to notifyPageChange Output.
   * @param pageNumber a page number
   */
  _onNotifyPageChange(pageNumber: number) {
    this.notifyPageChange.emit(pageNumber);
  }

  /**
   * A simple function that determines if the given page number is the current page number.
   * @param page a page number
   */
  _isSelected(page: number): boolean {
    return page === this.currentPage;
  }

  /**
   * Determines when ellipsis after the first page number should show.
   */
  _showFirstEllipsis(): boolean {
    return this.currentPage >= visiblePageRange+2;
  }

  /**
   * Determines when ellipsis before the final page number should show.
   */
  _showLastEllipsis(): boolean {
    return this.currentPage < (this.numberOfPages - visiblePageRange);
  }

  /**
   * Determines if the given page number should be shown. The two additional 'or' conditionals are needed 
   * so the paginator retains the same total width at the extreme page numbers (1 and numberOfPages).
   * @param pageNumber page number to check.
   */
  _showNumber(pageNumber: number): boolean {
    return Math.abs(this.currentPage - pageNumber) < visiblePageRange
      || (this.currentPage <= visiblePageRange && pageNumber <= 2*visiblePageRange)
      || (this.currentPage > this.numberOfPages - visiblePageRange && pageNumber > this.numberOfPages - 2*visiblePageRange);
  }

  /**
   * Determines when the Previous button should be disabled.
   */
  _disablePrev(): boolean {
    return this.currentPage === 1;
  }

  /**
   * Determines when the Next button should be disabled.
   */
  _disableNext(): boolean {
    return this.currentPage === this.numberOfPages;
  }
}
