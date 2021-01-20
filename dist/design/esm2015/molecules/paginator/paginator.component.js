/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, HostBinding, ElementRef, ChangeDetectionStrategy, Renderer2 } from '@angular/core';
import { daffColorMixin } from '../../core/colorable/colorable';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { DaffPaginatorNumberOfPagesErrorMessage, DaffPaginatorPageOutOfRangeErrorMessage } from './paginator-errors';
/**
 * An _elementRef and an instance of renderer2 are needed for the Colorable mixin
 */
class DaffPaginatorBase {
    /**
     * @param {?} _elementRef
     * @param {?} _renderer
     */
    constructor(_elementRef, _renderer) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
    }
}
if (false) {
    /** @type {?} */
    DaffPaginatorBase.prototype._elementRef;
    /** @type {?} */
    DaffPaginatorBase.prototype._renderer;
}
/** @type {?} */
const _daffPaginatorBase = daffColorMixin(DaffPaginatorBase);
/** @type {?} */
const visiblePageRange = 2;
export class DaffPaginatorComponent extends _daffPaginatorBase {
    /**
     * @param {?} elementRef
     * @param {?} renderer
     */
    constructor(elementRef, renderer) {
        super(elementRef, renderer);
        this.elementRef = elementRef;
        this.renderer = renderer;
        /**
         * \@docs-private
         */
        this.class = true;
        /**
         * \@docs-private
         */
        this.role = 'navigation';
        /**
         * \@docs-private
         */
        this.faChevronRight = faChevronRight;
        /**
         * \@docs-private
         */
        this.faChevronLeft = faChevronLeft;
        /**
         * Emits when the current page changes with the new current page.
         */
        this.notifyPageChange = new EventEmitter();
        /** @type {?} */
        const ariaLabel = elementRef.nativeElement.attributes['aria-label'];
        this._paginatorId = ariaLabel ? ariaLabel.nodeValue : null;
    }
    /**
     * \@docs-private
     * @return {?}
     */
    ngOnChanges() {
        if (this.numberOfPages < 1) {
            throw new Error(DaffPaginatorNumberOfPagesErrorMessage);
        }
        else if (this.numberOfPages < this.currentPage) {
            throw new Error(DaffPaginatorPageOutOfRangeErrorMessage);
        }
        this._numberOfPagesArray = this.numberOfPages < 2 ? [] : Array(this.numberOfPages - 2).fill(this.numberOfPages - 2).map((/**
         * @param {?} x
         * @param {?} i
         * @return {?}
         */
        (x, i) => i + 2));
    }
    /**
     * Emits the previous page number through notifyPageChange Output.
     * \@docs-private
     * @return {?}
     */
    _onNotifyPrevPageChange() {
        this.notifyPageChange.emit(this.currentPage - 1);
    }
    /**
     * Emits the next page number through notifyPageChange Output.
     * \@docs-private
     * @return {?}
     */
    _onNotifyNextPageChange() {
        this.notifyPageChange.emit(this.currentPage + 1);
    }
    /**
     * Emits a pageNumber to notifyPageChange Output.
     * \@docs-private
     * @param {?} pageNumber a page number
     * @return {?}
     */
    _onNotifyPageChange(pageNumber) {
        this.notifyPageChange.emit(pageNumber);
    }
    /**
     * A simple function that determines if the given page number is the current page number.
     * \@docs-private
     * @param {?} page a page number
     * @return {?}
     */
    _isSelected(page) {
        return page === this.currentPage;
    }
    /**
     * Determines when ellipsis after the first page number should show.
     * \@docs-private
     * @return {?}
     */
    _showFirstEllipsis() {
        return this.currentPage >= visiblePageRange + 2;
    }
    /**
     * Determines when ellipsis before the final page number should show.
     * \@docs-private
     * @return {?}
     */
    _showLastEllipsis() {
        return this.currentPage < (this.numberOfPages - visiblePageRange);
    }
    /**
     * Determines if the given page number should be shown. The two additional 'or' conditionals are needed
     * so the paginator retains the same total width at the extreme page numbers (1 and numberOfPages).
     * \@docs-private
     * @param {?} pageNumber page number to check.
     * @return {?}
     */
    _showNumber(pageNumber) {
        return Math.abs(this.currentPage - pageNumber) < visiblePageRange
            || (this.currentPage <= visiblePageRange && pageNumber <= 2 * visiblePageRange)
            || (this.currentPage > this.numberOfPages - visiblePageRange && pageNumber > this.numberOfPages - 2 * visiblePageRange);
    }
    /**
     * Determines when the Previous button should be disabled.
     * \@docs-private
     * @return {?}
     */
    _disablePrev() {
        return this.currentPage === 1;
    }
    /**
     * Determines when the Next button should be disabled.
     * \@docs-private
     * @return {?}
     */
    _disableNext() {
        return this.currentPage === this.numberOfPages;
    }
}
DaffPaginatorComponent.decorators = [
    { type: Component, args: [{
                selector: 'daff-paginator',
                template: "<button type=\"button\" class=\"daff-paginator__previous\"\n  [disabled]=\"_disablePrev()\"\n  tabindex=\"0\"\n  attr.aria-label=\"Go to Previous Page of {{_paginatorId}} Paginator\"\n  (click)=\"_onNotifyPrevPageChange()\">\n  <fa-icon [icon]=\"faChevronLeft\"></fa-icon> Previous\n</button>\n\n<button type=\"button\" class=\"daff-paginator__page-link\"\n  [class.selected]=\"_isSelected(1)\"\n  tabindex=\"0\"\n  attr.aria-label=\"Go to Page 1 of {{_paginatorId}} Paginator\"\n  (click)=\"_onNotifyPageChange(1)\">\n  1\n</button>\n\n<span class=\"daff-paginator__ellipsis\" *ngIf=\"_showFirstEllipsis()\">...</span>\n\n<ng-container *ngFor=\"let pageNumber of _numberOfPagesArray\">\n  <button type=\"button\" class=\"daff-paginator__page-link\"\n    [class.selected]=\"_isSelected(pageNumber)\"\n    tabindex=\"0\"\n    attr.aria-label=\"Go to Page {{pageNumber}} of {{_paginatorId}} Paginator\"\n    aria-current=\"_isSelected(pageNumber)\"\n    *ngIf=\"_showNumber(pageNumber)\"\n    (click)=\"_onNotifyPageChange(pageNumber)\">\n    {{ pageNumber }}\n  </button>\n</ng-container>\n\n<span class=\"daff-paginator__ellipsis\" *ngIf=\"_showLastEllipsis()\">...</span>\n\n<button type=\"button\" class=\"daff-paginator__page-link\"\n  [class.selected]=\"_isSelected(numberOfPages)\"\n  tabindex=\"0\"\n  attr.aria-label=\"Go To Page {{numberOfPages}} of {{_paginatorId}} Paginator\"\n  (click)=\"_onNotifyPageChange(numberOfPages)\"\n  *ngIf=\"!(numberOfPages < 2)\">\n  {{ numberOfPages }}\n</button>\n\n<button class=\"daff-paginator__next\"\n  [disabled]=\"_disableNext()\"\n  tabindex=\"0\"\n  attr.aria-label=\"Go to Next Page of {{_paginatorId}} Paginator\"\n  (click)=\"_onNotifyNextPageChange()\">\n  Next <fa-icon [icon]=\"faChevronRight\"></fa-icon>\n</button>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [":host{display:flex}.daff-paginator__next,.daff-paginator__previous{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;align-items:center;-webkit-appearance:none;-moz-appearance:none;appearance:none;background:0 0;border:0;border-radius:3px;display:flex;line-height:1em;padding:5px 10px}.daff-paginator__previous fa-icon{margin-right:10px}.daff-paginator__next fa-icon{margin-left:10px}.daff-paginator__ellipsis{padding:5px 10px}.daff-paginator__page-link{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:transparent;border:0;border-radius:3px;display:inline-block;margin:0 5px;padding:5px 10px;transition:background 150ms}"]
            }] }
];
/** @nocollapse */
DaffPaginatorComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
DaffPaginatorComponent.propDecorators = {
    class: [{ type: HostBinding, args: ['class.daff-paginator',] }],
    role: [{ type: HostBinding, args: ['attr.role',] }],
    color: [{ type: Input }],
    numberOfPages: [{ type: Input }],
    currentPage: [{ type: Input }],
    notifyPageChange: [{ type: Output }]
};
if (false) {
    /**
     * \@docs-private
     * @type {?}
     */
    DaffPaginatorComponent.prototype.class;
    /**
     * \@docs-private
     * @type {?}
     */
    DaffPaginatorComponent.prototype.role;
    /**
     * \@docs-private
     * @type {?}
     */
    DaffPaginatorComponent.prototype.faChevronRight;
    /**
     * \@docs-private
     * @type {?}
     */
    DaffPaginatorComponent.prototype.faChevronLeft;
    /**
     * The color theme of the paginator.
     * @type {?}
     */
    DaffPaginatorComponent.prototype.color;
    /**
     * \@docs-private
     * @type {?}
     */
    DaffPaginatorComponent.prototype._paginatorId;
    /**
     * The total number of pages the paginator tracks. This number can change dynamically, but the end user is responsible for keeping numberOfPages
     * and currentPage in sync. For example, if the numberOfPages is dynamically changed to a value less than the currentPage, the paginator will break.
     * @type {?}
     */
    DaffPaginatorComponent.prototype.numberOfPages;
    /**
     * The currently selected page.
     * @type {?}
     */
    DaffPaginatorComponent.prototype.currentPage;
    /**
     * \@docs-private
     * @type {?}
     */
    DaffPaginatorComponent.prototype._numberOfPagesArray;
    /**
     * Emits when the current page changes with the new current page.
     * @type {?}
     */
    DaffPaginatorComponent.prototype.notifyPageChange;
    /**
     * @type {?}
     * @private
     */
    DaffPaginatorComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    DaffPaginatorComponent.prototype.renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9kZXNpZ24vIiwic291cmNlcyI6WyJtb2xlY3VsZXMvcGFnaW5hdG9yL3BhZ2luYXRvci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBYSx1QkFBdUIsRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFFdkosT0FBTyxFQUFFLGNBQWMsRUFBOEIsTUFBTSxnQ0FBZ0MsQ0FBQztBQUU1RixPQUFPLEVBQUUsY0FBYyxFQUFFLGFBQWEsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxzQ0FBc0MsRUFBRSx1Q0FBdUMsRUFBRSxNQUFNLG9CQUFvQixDQUFDOzs7O0FBS3JILE1BQU0saUJBQWlCOzs7OztJQUNyQixZQUFtQixXQUF1QixFQUFTLFNBQW9CO1FBQXBELGdCQUFXLEdBQVgsV0FBVyxDQUFZO1FBQVMsY0FBUyxHQUFULFNBQVMsQ0FBVztJQUFHLENBQUM7Q0FDNUU7OztJQURhLHdDQUE4Qjs7SUFBRSxzQ0FBMkI7OztNQUduRSxrQkFBa0IsR0FBRyxjQUFjLENBQUMsaUJBQWlCLENBQUM7O01BRXRELGdCQUFnQixHQUFHLENBQUM7QUFRMUIsTUFBTSxPQUFPLHNCQUF1QixTQUFRLGtCQUFrQjs7Ozs7SUE2QjVELFlBQW9CLFVBQXNCLEVBQVUsUUFBbUI7UUFDckUsS0FBSyxDQUFDLFVBQVUsRUFBRSxRQUFRLENBQUMsQ0FBQztRQURWLGVBQVUsR0FBVixVQUFVLENBQVk7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFXOzs7O1FBeEJuQyxVQUFLLEdBQUcsSUFBSSxDQUFDOzs7O1FBSXZCLFNBQUksR0FBRyxZQUFZLENBQUM7Ozs7UUFLL0MsbUJBQWMsR0FBRyxjQUFjLENBQUM7Ozs7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VUFBVTtZQUFzQyxTQUFTOzs7b0JBNkJySCxXQUFXLFNBQUMsc0JBQXNCO21CQUlqQyxXQUFXLFNBQUMsV0FBVztvQkFjdkIsS0FBSzs0QkFnQkwsS0FBSzswQkFLTCxLQUFLOytCQVVMLE1BQU07Ozs7Ozs7SUFqRFIsdUNBQWtEOzs7OztJQUlqRCxzQ0FBOEM7Ozs7O0lBSy9DLGdEQUFnQzs7Ozs7SUFJL0IsK0NBQThCOzs7OztJQUs5Qix1Q0FBNEI7Ozs7O0lBSTdCLDhDQUFxQjs7Ozs7O0lBWXBCLCtDQUErQjs7Ozs7SUFLL0IsNkNBQTZCOzs7OztJQUs3QixxREFBOEI7Ozs7O0lBSzlCLGtEQUFtRTs7Ozs7SUF6QnZELDRDQUE4Qjs7Ozs7SUFBRSwwQ0FBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgSG9zdEJpbmRpbmcsIEVsZW1lbnRSZWYsIE9uQ2hhbmdlcywgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIFJlbmRlcmVyMiwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IGRhZmZDb2xvck1peGluLCBEYWZmUGFsZXR0ZSwgRGFmZkNvbG9yYWJsZSB9IGZyb20gJy4uLy4uL2NvcmUvY29sb3JhYmxlL2NvbG9yYWJsZSc7XG5cbmltcG9ydCB7IGZhQ2hldnJvblJpZ2h0LCBmYUNoZXZyb25MZWZ0IH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJztcbmltcG9ydCB7IERhZmZQYWdpbmF0b3JOdW1iZXJPZlBhZ2VzRXJyb3JNZXNzYWdlLCBEYWZmUGFnaW5hdG9yUGFnZU91dE9mUmFuZ2VFcnJvck1lc3NhZ2UgfSBmcm9tICcuL3BhZ2luYXRvci1lcnJvcnMnO1xuXG4vKipcbiAqIEFuIF9lbGVtZW50UmVmIGFuZCBhbiBpbnN0YW5jZSBvZiByZW5kZXJlcjIgYXJlIG5lZWRlZCBmb3IgdGhlIENvbG9yYWJsZSBtaXhpblxuICovXG5jbGFzcyBEYWZmUGFnaW5hdG9yQmFzZSB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBfZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcHVibGljIF9yZW5kZXJlcjogUmVuZGVyZXIyKSB7fVxufVxuXG5jb25zdCBfZGFmZlBhZ2luYXRvckJhc2UgPSBkYWZmQ29sb3JNaXhpbihEYWZmUGFnaW5hdG9yQmFzZSlcblxuY29uc3QgdmlzaWJsZVBhZ2VSYW5nZSA9IDI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RhZmYtcGFnaW5hdG9yJyxcbiAgc3R5bGVVcmxzOiBbJy4vcGFnaW5hdG9yLmNvbXBvbmVudC5zY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAnLi9wYWdpbmF0b3IuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBEYWZmUGFnaW5hdG9yQ29tcG9uZW50IGV4dGVuZHMgX2RhZmZQYWdpbmF0b3JCYXNlIGltcGxlbWVudHMgT25DaGFuZ2VzLCBEYWZmQ29sb3JhYmxlIHtcblx0XG5cdC8qKlxuXHQgKiBAZG9jcy1wcml2YXRlXG5cdCAqL1xuXHRASG9zdEJpbmRpbmcoJ2NsYXNzLmRhZmYtcGFnaW5hdG9yJykgY2xhc3MgPSB0cnVlO1xuXHQvKipcblx0ICogQGRvY3MtcHJpdmF0ZVxuXHQgKi9cbiAgQEhvc3RCaW5kaW5nKCdhdHRyLnJvbGUnKSByb2xlID0gJ25hdmlnYXRpb24nO1xuXG5cdC8qKlxuXHQgKiBAZG9jcy1wcml2YXRlXG5cdCAqL1xuXHRmYUNoZXZyb25SaWdodCA9IGZhQ2hldnJvblJpZ2h0O1xuXHQvKipcblx0ICogQGRvY3MtcHJpdmF0ZVxuXHQgKi9cbiAgZmFDaGV2cm9uTGVmdCA9IGZhQ2hldnJvbkxlZnQ7XG5cbiAgLyoqXG4gICAqIFRoZSBjb2xvciB0aGVtZSBvZiB0aGUgcGFnaW5hdG9yLlxuICAgKi9cbiAgQElucHV0KCkgY29sb3I6IERhZmZQYWxldHRlO1xuXHQvKipcblx0ICogQGRvY3MtcHJpdmF0ZVxuXHQgKi9cblx0X3BhZ2luYXRvcklkOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHtcbiAgICBzdXBlcihlbGVtZW50UmVmLCByZW5kZXJlcik7XG4gICAgY29uc3QgYXJpYUxhYmVsID0gZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmF0dHJpYnV0ZXNbJ2FyaWEtbGFiZWwnXTtcbiAgICB0aGlzLl9wYWdpbmF0b3JJZCA9IGFyaWFMYWJlbCA/IGFyaWFMYWJlbC5ub2RlVmFsdWUgOiBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSB0b3RhbCBudW1iZXIgb2YgcGFnZXMgdGhlIHBhZ2luYXRvciB0cmFja3MuIFRoaXMgbnVtYmVyIGNhbiBjaGFuZ2UgZHluYW1pY2FsbHksIGJ1dCB0aGUgZW5kIHVzZXIgaXMgcmVzcG9uc2libGUgZm9yIGtlZXBpbmcgbnVtYmVyT2ZQYWdlc1xuICAgKiBhbmQgY3VycmVudFBhZ2UgaW4gc3luYy4gRm9yIGV4YW1wbGUsIGlmIHRoZSBudW1iZXJPZlBhZ2VzIGlzIGR5bmFtaWNhbGx5IGNoYW5nZWQgdG8gYSB2YWx1ZSBsZXNzIHRoYW4gdGhlIGN1cnJlbnRQYWdlLCB0aGUgcGFnaW5hdG9yIHdpbGwgYnJlYWsuXG4gICAqL1xuICBASW5wdXQoKSBudW1iZXJPZlBhZ2VzOiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgcGFnZS5cbiAgICovXG4gIEBJbnB1dCgpIGN1cnJlbnRQYWdlOiBudW1iZXI7XG5cblx0LyoqXG5cdCAqIEBkb2NzLXByaXZhdGVcblx0ICovXG4gIF9udW1iZXJPZlBhZ2VzQXJyYXk6IG51bWJlcltdO1xuXG4gIC8qKlxuICAgKiBFbWl0cyB3aGVuIHRoZSBjdXJyZW50IHBhZ2UgY2hhbmdlcyB3aXRoIHRoZSBuZXcgY3VycmVudCBwYWdlLlxuICAgKi9cbiAgQE91dHB1dCgpIG5vdGlmeVBhZ2VDaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8qKlxuXHQgKiBAZG9jcy1wcml2YXRlXG5cdCAqL1xuICBuZ09uQ2hhbmdlcygpIHtcbiAgICBpZih0aGlzLm51bWJlck9mUGFnZXMgPCAxKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoRGFmZlBhZ2luYXRvck51bWJlck9mUGFnZXNFcnJvck1lc3NhZ2UpO1xuICAgIH0gZWxzZSBpZih0aGlzLm51bWJlck9mUGFnZXMgPCB0aGlzLmN1cnJlbnRQYWdlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoRGFmZlBhZ2luYXRvclBhZ2VPdXRPZlJhbmdlRXJyb3JNZXNzYWdlKTtcbiAgICB9XG5cbiAgICB0aGlzLl9udW1iZXJPZlBhZ2VzQXJyYXkgPSB0aGlzLm51bWJlck9mUGFnZXMgPCAyID8gW10gOiBBcnJheSh0aGlzLm51bWJlck9mUGFnZXMtMikuZmlsbCh0aGlzLm51bWJlck9mUGFnZXMtMikubWFwKCh4LGkpPT5pKzIpO1xuICB9XG5cbiAgLyoqXG4gICAqIEVtaXRzIHRoZSBwcmV2aW91cyBwYWdlIG51bWJlciB0aHJvdWdoIG5vdGlmeVBhZ2VDaGFuZ2UgT3V0cHV0LlxuXHQgKiBAZG9jcy1wcml2YXRlXG4gICAqL1xuICBfb25Ob3RpZnlQcmV2UGFnZUNoYW5nZSgpIHtcbiAgICB0aGlzLm5vdGlmeVBhZ2VDaGFuZ2UuZW1pdCh0aGlzLmN1cnJlbnRQYWdlIC0gMSk7XG4gIH1cblxuICAvKipcbiAgICogRW1pdHMgdGhlIG5leHQgcGFnZSBudW1iZXIgdGhyb3VnaCBub3RpZnlQYWdlQ2hhbmdlIE91dHB1dC5cblx0ICogQGRvY3MtcHJpdmF0ZVxuICAgKi9cbiAgX29uTm90aWZ5TmV4dFBhZ2VDaGFuZ2UoKSB7XG4gICAgdGhpcy5ub3RpZnlQYWdlQ2hhbmdlLmVtaXQodGhpcy5jdXJyZW50UGFnZSArIDEpO1xuICB9XG5cbiAgLyoqXG4gICAqIEVtaXRzIGEgcGFnZU51bWJlciB0byBub3RpZnlQYWdlQ2hhbmdlIE91dHB1dC5cblx0ICogQGRvY3MtcHJpdmF0ZVxuICAgKiBAcGFyYW0gcGFnZU51bWJlciBhIHBhZ2UgbnVtYmVyXG4gICAqL1xuICBfb25Ob3RpZnlQYWdlQ2hhbmdlKHBhZ2VOdW1iZXI6IG51bWJlcikge1xuICAgIHRoaXMubm90aWZ5UGFnZUNoYW5nZS5lbWl0KHBhZ2VOdW1iZXIpO1xuICB9XG5cbiAgLyoqXG4gICAqIEEgc2ltcGxlIGZ1bmN0aW9uIHRoYXQgZGV0ZXJtaW5lcyBpZiB0aGUgZ2l2ZW4gcGFnZSBudW1iZXIgaXMgdGhlIGN1cnJlbnQgcGFnZSBudW1iZXIuXG5cdCAqIEBkb2NzLXByaXZhdGVcbiAgICogQHBhcmFtIHBhZ2UgYSBwYWdlIG51bWJlclxuICAgKi9cbiAgX2lzU2VsZWN0ZWQocGFnZTogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHBhZ2UgPT09IHRoaXMuY3VycmVudFBhZ2U7XG4gIH1cblxuICAvKipcbiAgICogRGV0ZXJtaW5lcyB3aGVuIGVsbGlwc2lzIGFmdGVyIHRoZSBmaXJzdCBwYWdlIG51bWJlciBzaG91bGQgc2hvdy5cblx0ICogQGRvY3MtcHJpdmF0ZVxuICAgKi9cbiAgX3Nob3dGaXJzdEVsbGlwc2lzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmN1cnJlbnRQYWdlID49IHZpc2libGVQYWdlUmFuZ2UrMjtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmVzIHdoZW4gZWxsaXBzaXMgYmVmb3JlIHRoZSBmaW5hbCBwYWdlIG51bWJlciBzaG91bGQgc2hvdy5cblx0ICogQGRvY3MtcHJpdmF0ZVxuICAgKi9cbiAgX3Nob3dMYXN0RWxsaXBzaXMoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuY3VycmVudFBhZ2UgPCAodGhpcy5udW1iZXJPZlBhZ2VzIC0gdmlzaWJsZVBhZ2VSYW5nZSk7XG4gIH1cblxuICAvKipcbiAgICogRGV0ZXJtaW5lcyBpZiB0aGUgZ2l2ZW4gcGFnZSBudW1iZXIgc2hvdWxkIGJlIHNob3duLiBUaGUgdHdvIGFkZGl0aW9uYWwgJ29yJyBjb25kaXRpb25hbHMgYXJlIG5lZWRlZCBcbiAgICogc28gdGhlIHBhZ2luYXRvciByZXRhaW5zIHRoZSBzYW1lIHRvdGFsIHdpZHRoIGF0IHRoZSBleHRyZW1lIHBhZ2UgbnVtYmVycyAoMSBhbmQgbnVtYmVyT2ZQYWdlcykuXG5cdCAqIEBkb2NzLXByaXZhdGVcbiAgICogQHBhcmFtIHBhZ2VOdW1iZXIgcGFnZSBudW1iZXIgdG8gY2hlY2suXG4gICAqL1xuICBfc2hvd051bWJlcihwYWdlTnVtYmVyOiBudW1iZXIpOiBib29sZWFuIHtcbiAgICByZXR1cm4gTWF0aC5hYnModGhpcy5jdXJyZW50UGFnZSAtIHBhZ2VOdW1iZXIpIDwgdmlzaWJsZVBhZ2VSYW5nZVxuICAgICAgfHwgKHRoaXMuY3VycmVudFBhZ2UgPD0gdmlzaWJsZVBhZ2VSYW5nZSAmJiBwYWdlTnVtYmVyIDw9IDIqdmlzaWJsZVBhZ2VSYW5nZSlcbiAgICAgIHx8ICh0aGlzLmN1cnJlbnRQYWdlID4gdGhpcy5udW1iZXJPZlBhZ2VzIC0gdmlzaWJsZVBhZ2VSYW5nZSAmJiBwYWdlTnVtYmVyID4gdGhpcy5udW1iZXJPZlBhZ2VzIC0gMip2aXNpYmxlUGFnZVJhbmdlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmVzIHdoZW4gdGhlIFByZXZpb3VzIGJ1dHRvbiBzaG91bGQgYmUgZGlzYWJsZWQuXG5cdCAqIEBkb2NzLXByaXZhdGVcbiAgICovXG4gIF9kaXNhYmxlUHJldigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50UGFnZSA9PT0gMTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmVzIHdoZW4gdGhlIE5leHQgYnV0dG9uIHNob3VsZCBiZSBkaXNhYmxlZC5cblx0ICogQGRvY3MtcHJpdmF0ZVxuICAgKi9cbiAgX2Rpc2FibGVOZXh0KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmN1cnJlbnRQYWdlID09PSB0aGlzLm51bWJlck9mUGFnZXM7XG4gIH1cbn1cbiJdfQ==