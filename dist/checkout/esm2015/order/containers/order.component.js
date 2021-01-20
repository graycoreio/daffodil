/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { selectOrder, selectLoading } from '../selectors/order.selector';
/**
 * @deprecated
 */
export class OrderContainer {
    /**
     * @param {?} store
     */
    constructor(store) {
        this.store = store;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.order$ = this.store.pipe(select(selectOrder));
        this.loading$ = this.store.pipe(select(selectLoading));
    }
}
OrderContainer.decorators = [
    { type: Component, args: [{
                selector: '[order-container]',
                template: '<ng-content></ng-content>',
                exportAs: 'OrderContainer'
            }] }
];
/** @nocollapse */
OrderContainer.ctorParameters = () => [
    { type: Store }
];
if (false) {
    /** @type {?} */
    OrderContainer.prototype.order$;
    /** @type {?} */
    OrderContainer.prototype.loading$;
    /**
     * @type {?}
     * @private
     */
    OrderContainer.prototype.store;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2NoZWNrb3V0LyIsInNvdXJjZXMiOlsib3JkZXIvY29udGFpbmVycy9vcmRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFFbEQsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFHNUMsT0FBTyxFQUFFLFdBQVcsRUFBRSxhQUFhLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQzs7OztBQVd6RSxNQUFNLE9BQU8sY0FBYzs7OztJQUt6QixZQUNVLEtBQW9DO1FBQXBDLFVBQUssR0FBTCxLQUFLLENBQStCO0lBQzFDLENBQUM7Ozs7SUFFTCxRQUFRO1FBQ04sSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO0lBQ3pELENBQUM7OztZQWpCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtnQkFDN0IsUUFBUSxFQUFFLDJCQUEyQjtnQkFDckMsUUFBUSxFQUFFLGdCQUFnQjthQUMzQjs7OztZQWJRLEtBQUs7Ozs7SUFnQlosZ0NBQThCOztJQUM5QixrQ0FBOEI7Ozs7O0lBRzVCLCtCQUE0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBTdG9yZSwgc2VsZWN0IH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuXG5pbXBvcnQgeyBEYWZmT3JkZXJSZWR1Y2Vyc1N0YXRlIH0gZnJvbSAnLi4vcmVkdWNlcnMvb3JkZXItcmVkdWNlcnMuaW50ZXJmYWNlJztcbmltcG9ydCB7IHNlbGVjdE9yZGVyLCBzZWxlY3RMb2FkaW5nIH0gZnJvbSAnLi4vc2VsZWN0b3JzL29yZGVyLnNlbGVjdG9yJztcbmltcG9ydCB7IERhZmZPcmRlciB9IGZyb20gJy4uLy4uL21vZGVscy9vcmRlci9vcmRlcic7XG5cbi8qKlxuICogQGRlcHJlY2F0ZWRcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnW29yZGVyLWNvbnRhaW5lcl0nLFxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxuICBleHBvcnRBczogJ09yZGVyQ29udGFpbmVyJ1xufSlcbmV4cG9ydCBjbGFzcyBPcmRlckNvbnRhaW5lciBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgb3JkZXIkOiBPYnNlcnZhYmxlPERhZmZPcmRlcj47XG4gIGxvYWRpbmckOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgc3RvcmU6IFN0b3JlPERhZmZPcmRlclJlZHVjZXJzU3RhdGU+XG4gICkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5vcmRlciQgPSB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KHNlbGVjdE9yZGVyKSk7XG4gICAgdGhpcy5sb2FkaW5nJCA9IHRoaXMuc3RvcmUucGlwZShzZWxlY3Qoc2VsZWN0TG9hZGluZykpO1xuICB9XG59XG4iXX0=