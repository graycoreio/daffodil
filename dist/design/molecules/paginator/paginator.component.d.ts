import { EventEmitter, ElementRef, OnChanges, Renderer2 } from '@angular/core';
import { DaffPalette, DaffColorable } from '../../core/colorable/colorable';
/**
 * An _elementRef and an instance of renderer2 are needed for the Colorable mixin
 */
declare class DaffPaginatorBase {
    _elementRef: ElementRef;
    _renderer: Renderer2;
    constructor(_elementRef: ElementRef, _renderer: Renderer2);
}
declare const _daffPaginatorBase: {
    new (...args: any[]): {
        _color: DaffPalette;
        color: DaffPalette;
        _elementRef: ElementRef<any>;
        _renderer: Renderer2;
    };
} & typeof DaffPaginatorBase;
export declare class DaffPaginatorComponent extends _daffPaginatorBase implements OnChanges, DaffColorable {
    private elementRef;
    private renderer;
    /**
     * @docs-private
     */
    class: boolean;
    /**
     * @docs-private
     */
    role: string;
    /**
     * @docs-private
     */
    faChevronRight: import("@fortawesome/fontawesome-common-types").IconDefinition;
    /**
     * @docs-private
     */
    faChevronLeft: import("@fortawesome/fontawesome-common-types").IconDefinition;
    /**
     * The color theme of the paginator.
     */
    color: DaffPalette;
    /**
     * @docs-private
     */
    _paginatorId: string;
    constructor(elementRef: ElementRef, renderer: Renderer2);
    /**
     * The total number of pages the paginator tracks. This number can change dynamically, but the end user is responsible for keeping numberOfPages
     * and currentPage in sync. For example, if the numberOfPages is dynamically changed to a value less than the currentPage, the paginator will break.
     */
    numberOfPages: number;
    /**
     * The currently selected page.
     */
    currentPage: number;
    /**
     * @docs-private
     */
    _numberOfPagesArray: number[];
    /**
     * Emits when the current page changes with the new current page.
     */
    notifyPageChange: EventEmitter<any>;
    /**
     * @docs-private
     */
    ngOnChanges(): void;
    /**
     * Emits the previous page number through notifyPageChange Output.
       * @docs-private
     */
    _onNotifyPrevPageChange(): void;
    /**
     * Emits the next page number through notifyPageChange Output.
       * @docs-private
     */
    _onNotifyNextPageChange(): void;
    /**
     * Emits a pageNumber to notifyPageChange Output.
       * @docs-private
     * @param pageNumber a page number
     */
    _onNotifyPageChange(pageNumber: number): void;
    /**
     * A simple function that determines if the given page number is the current page number.
       * @docs-private
     * @param page a page number
     */
    _isSelected(page: number): boolean;
    /**
     * Determines when ellipsis after the first page number should show.
       * @docs-private
     */
    _showFirstEllipsis(): boolean;
    /**
     * Determines when ellipsis before the final page number should show.
       * @docs-private
     */
    _showLastEllipsis(): boolean;
    /**
     * Determines if the given page number should be shown. The two additional 'or' conditionals are needed
     * so the paginator retains the same total width at the extreme page numbers (1 and numberOfPages).
       * @docs-private
     * @param pageNumber page number to check.
     */
    _showNumber(pageNumber: number): boolean;
    /**
     * Determines when the Previous button should be disabled.
       * @docs-private
     */
    _disablePrev(): boolean;
    /**
     * Determines when the Next button should be disabled.
       * @docs-private
     */
    _disableNext(): boolean;
}
export {};
