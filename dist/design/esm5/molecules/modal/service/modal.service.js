/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { ComponentPortal } from '@angular/cdk/portal';
import { Overlay, GlobalPositionStrategy, } from '@angular/cdk/overlay';
import { DaffModalComponent } from '../modal/modal.component';
import { DaffModalModule } from '../modal.module';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/overlay";
import * as i2 from "../modal.module";
var DaffModalService = /** @class */ (function () {
    function DaffModalService(overlay) {
        this.overlay = overlay;
        this._modals = [];
        this.defaultConfiguration = {};
    }
    /**
     * @private
     * @param {?} overlayRef
     * @return {?}
     */
    DaffModalService.prototype._attachModal = /**
     * @private
     * @param {?} overlayRef
     * @return {?}
     */
    function (overlayRef) {
        /** @type {?} */
        var modal = overlayRef.attach(new ComponentPortal(DaffModalComponent));
        modal.instance.open = true;
        return modal;
    };
    /**
     * @private
     * @param {?} component
     * @param {?} modal
     * @return {?}
     */
    DaffModalService.prototype._attachModalContent = /**
     * @private
     * @param {?} component
     * @param {?} modal
     * @return {?}
     */
    function (component, modal) {
        modal.instance.attachContent(new ComponentPortal(component));
    };
    /**
     * @private
     * @return {?}
     */
    DaffModalService.prototype._createOverlayRef = /**
     * @private
     * @return {?}
     */
    function () {
        return this.overlay.create({
            hasBackdrop: true,
            positionStrategy: new GlobalPositionStrategy()
                .centerHorizontally()
                .centerVertically(),
            scrollStrategy: this.overlay.scrollStrategies.block()
        });
    };
    /**
     * @private
     * @param {?} modal
     * @return {?}
     */
    DaffModalService.prototype._removeModal = /**
     * @private
     * @param {?} modal
     * @return {?}
     */
    function (modal) {
        /** @type {?} */
        var index = this._modals.indexOf(modal);
        if (index === -1) {
            throw new Error('The Modal that you are trying to remove does not exist.');
        }
        modal.overlay.dispose();
        this._modals = this._modals.filter((/**
         * @param {?} m
         * @return {?}
         */
        function (m) { return m !== modal; }));
    };
    /**
     * @param {?} component
     * @param {?=} configuration
     * @return {?}
     */
    DaffModalService.prototype.open = /**
     * @param {?} component
     * @param {?=} configuration
     * @return {?}
     */
    function (component, configuration) {
        var _this = this;
        /** @type {?} */
        var config = tslib_1.__assign({}, this.defaultConfiguration, configuration);
        /** @type {?} */
        var _ref = this._createOverlayRef();
        /** @type {?} */
        var _modal = this._attachModal(_ref);
        /** @type {?} */
        var _attachedModal = this._attachModalContent(component, _modal);
        /** @type {?} */
        var modal = {
            modal: _modal,
            overlay: _ref,
        };
        this._modals.push(modal);
        _ref
            .backdropClick()
            .subscribe((/**
         * @return {?}
         */
        function () {
            return config.onBackdropClicked
                ? config.onBackdropClicked()
                : _this.close(modal);
        }));
        return modal;
    };
    /**
     * @param {?} modal
     * @return {?}
     */
    DaffModalService.prototype.close = /**
     * @param {?} modal
     * @return {?}
     */
    function (modal) {
        var _this = this;
        modal.modal.instance.open = false;
        modal.overlay.detachBackdrop();
        modal.modal.instance.closedAnimationCompleted.subscribe((/**
         * @param {?} e
         * @return {?}
         */
        function (e) { return _this._removeModal(modal); }));
    };
    DaffModalService.decorators = [
        { type: Injectable, args: [{
                    providedIn: DaffModalModule,
                },] }
    ];
    /** @nocollapse */
    DaffModalService.ctorParameters = function () { return [
        { type: Overlay }
    ]; };
    /** @nocollapse */ DaffModalService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffModalService_Factory() { return new DaffModalService(i0.ɵɵinject(i1.Overlay)); }, token: DaffModalService, providedIn: i2.DaffModalModule });
    return DaffModalService;
}());
export { DaffModalService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    DaffModalService.prototype._modals;
    /**
     * @type {?}
     * @private
     */
    DaffModalService.prototype.defaultConfiguration;
    /**
     * @type {?}
     * @private
     */
    DaffModalService.prototype.overlay;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9kZXNpZ24vIiwic291cmNlcyI6WyJtb2xlY3VsZXMvbW9kYWwvc2VydmljZS9tb2RhbC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBc0IsTUFBTSxlQUFlLENBQUM7QUFDL0QsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3RELE9BQU8sRUFFTixPQUFPLEVBQ1Asc0JBQXNCLEdBQ3RCLE1BQU0sc0JBQXNCLENBQUM7QUFFOUIsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFJOUQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGlCQUFpQixDQUFDOzs7O0FBRWxEO0lBTUMsMEJBQW9CLE9BQWdCO1FBQWhCLFlBQU8sR0FBUCxPQUFPLENBQVM7UUFGNUIsWUFBTyxHQUFnQixFQUFFLENBQUM7UUFJMUIseUJBQW9CLEdBQTJCLEVBQUUsQ0FBQztJQUZuQixDQUFDOzs7Ozs7SUFJaEMsdUNBQVk7Ozs7O0lBQXBCLFVBQ0MsVUFBc0I7O1lBRWhCLEtBQUssR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksZUFBZSxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFDeEUsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQzNCLE9BQU8sS0FBSyxDQUFDO0lBQ2QsQ0FBQzs7Ozs7OztJQUVPLDhDQUFtQjs7Ozs7O0lBQTNCLFVBQ0MsU0FBb0IsRUFDcEIsS0FBdUM7UUFFdkMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxlQUFlLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztJQUM5RCxDQUFDOzs7OztJQUVPLDRDQUFpQjs7OztJQUF6QjtRQUNDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7WUFDMUIsV0FBVyxFQUFFLElBQUk7WUFDakIsZ0JBQWdCLEVBQUUsSUFBSSxzQkFBc0IsRUFBRTtpQkFDNUMsa0JBQWtCLEVBQUU7aUJBQ3BCLGdCQUFnQixFQUFFO1lBQ3BCLGNBQWMsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRTtTQUNyRCxDQUFDLENBQUM7SUFDSixDQUFDOzs7Ozs7SUFFTyx1Q0FBWTs7Ozs7SUFBcEIsVUFBcUIsS0FBZ0I7O1lBQzlCLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7UUFDekMsSUFBSSxLQUFLLEtBQUssQ0FBQyxDQUFDLEVBQUU7WUFDakIsTUFBTSxJQUFJLEtBQUssQ0FDZCx5REFBeUQsQ0FDekQsQ0FBQztTQUNGO1FBRUQsS0FBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUV4QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTTs7OztRQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxLQUFLLEtBQUssRUFBWCxDQUFXLEVBQUMsQ0FBQztJQUN0RCxDQUFDOzs7Ozs7SUFFRCwrQkFBSTs7Ozs7SUFBSixVQUNDLFNBQW9CLEVBQ3BCLGFBQStDO1FBRmhELGlCQXdCQzs7WUFwQk0sTUFBTSx3QkFBUSxJQUFJLENBQUMsb0JBQW9CLEVBQUssYUFBYSxDQUFFOztZQUMzRCxJQUFJLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixFQUFFOztZQUMvQixNQUFNLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUM7O1lBQ2hDLGNBQWMsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsU0FBUyxFQUFFLE1BQU0sQ0FBQzs7WUFFNUQsS0FBSyxHQUFjO1lBQ3hCLEtBQUssRUFBRSxNQUFNO1lBQ2IsT0FBTyxFQUFFLElBQUk7U0FDYjtRQUVELElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRXpCLElBQUk7YUFDRixhQUFhLEVBQUU7YUFDZixTQUFTOzs7UUFBQztZQUNWLE9BQUEsTUFBTSxDQUFDLGlCQUFpQjtnQkFDdkIsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsRUFBRTtnQkFDNUIsQ0FBQyxDQUFDLEtBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO1FBRnBCLENBRW9CLEVBQ3BCLENBQUM7UUFDSCxPQUFPLEtBQUssQ0FBQztJQUNkLENBQUM7Ozs7O0lBRUQsZ0NBQUs7Ozs7SUFBTCxVQUFNLEtBQWdCO1FBQXRCLGlCQU1DO1FBTEEsS0FBSyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztRQUNsQyxLQUFLLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQy9CLEtBQUssQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLHdCQUF3QixDQUFDLFNBQVM7Ozs7UUFDdEQsVUFBQyxDQUFpQixJQUFLLE9BQUEsS0FBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsRUFBeEIsQ0FBd0IsRUFDL0MsQ0FBQztJQUNILENBQUM7O2dCQWhGRCxVQUFVLFNBQUM7b0JBQ1gsVUFBVSxFQUFFLGVBQWU7aUJBQzNCOzs7O2dCQVpBLE9BQU87OzsyQkFKUjtDQStGQyxBQWpGRCxJQWlGQztTQTlFWSxnQkFBZ0I7Ozs7OztJQUM1QixtQ0FBa0M7Ozs7O0lBSWxDLGdEQUEwRDs7Ozs7SUFGOUMsbUNBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgVHlwZSwgQ29tcG9uZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21wb25lbnRQb3J0YWwgfSBmcm9tICdAYW5ndWxhci9jZGsvcG9ydGFsJztcbmltcG9ydCB7XG5cdE92ZXJsYXlSZWYsXG5cdE92ZXJsYXksXG5cdEdsb2JhbFBvc2l0aW9uU3RyYXRlZ3ksXG59IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcblxuaW1wb3J0IHsgRGFmZk1vZGFsQ29tcG9uZW50IH0gZnJvbSAnLi4vbW9kYWwvbW9kYWwuY29tcG9uZW50JztcbmltcG9ydCB7IERhZmZNb2RhbENvbmZpZ3VyYXRpb24gfSBmcm9tICcuLi9tb2RhbC9tb2RhbC1jb25maWcnO1xuaW1wb3J0IHsgRGFmZk1vZGFsIH0gZnJvbSAnLi4vbW9kYWwnO1xuaW1wb3J0IHsgQW5pbWF0aW9uRXZlbnQgfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcbmltcG9ydCB7IERhZmZNb2RhbE1vZHVsZSB9IGZyb20gJy4uL21vZGFsLm1vZHVsZSc7XG5cbkBJbmplY3RhYmxlKHtcblx0cHJvdmlkZWRJbjogRGFmZk1vZGFsTW9kdWxlLFxufSlcbmV4cG9ydCBjbGFzcyBEYWZmTW9kYWxTZXJ2aWNlIHtcblx0cHJpdmF0ZSBfbW9kYWxzOiBEYWZmTW9kYWxbXSA9IFtdO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgb3ZlcmxheTogT3ZlcmxheSkge31cblxuXHRwcml2YXRlIGRlZmF1bHRDb25maWd1cmF0aW9uOiBEYWZmTW9kYWxDb25maWd1cmF0aW9uID0ge307XG5cblx0cHJpdmF0ZSBfYXR0YWNoTW9kYWwoXG5cdFx0b3ZlcmxheVJlZjogT3ZlcmxheVJlZixcblx0KTogQ29tcG9uZW50UmVmPERhZmZNb2RhbENvbXBvbmVudD4ge1xuXHRcdGNvbnN0IG1vZGFsID0gb3ZlcmxheVJlZi5hdHRhY2gobmV3IENvbXBvbmVudFBvcnRhbChEYWZmTW9kYWxDb21wb25lbnQpKTtcblx0XHRtb2RhbC5pbnN0YW5jZS5vcGVuID0gdHJ1ZTtcblx0XHRyZXR1cm4gbW9kYWw7XG5cdH1cblxuXHRwcml2YXRlIF9hdHRhY2hNb2RhbENvbnRlbnQoXG5cdFx0Y29tcG9uZW50OiBUeXBlPGFueT4sXG5cdFx0bW9kYWw6IENvbXBvbmVudFJlZjxEYWZmTW9kYWxDb21wb25lbnQ+LFxuXHQpOiB2b2lkIHtcblx0XHRtb2RhbC5pbnN0YW5jZS5hdHRhY2hDb250ZW50KG5ldyBDb21wb25lbnRQb3J0YWwoY29tcG9uZW50KSk7XG5cdH1cblxuXHRwcml2YXRlIF9jcmVhdGVPdmVybGF5UmVmKCk6IE92ZXJsYXlSZWYge1xuXHRcdHJldHVybiB0aGlzLm92ZXJsYXkuY3JlYXRlKHtcblx0XHRcdGhhc0JhY2tkcm9wOiB0cnVlLFxuXHRcdFx0cG9zaXRpb25TdHJhdGVneTogbmV3IEdsb2JhbFBvc2l0aW9uU3RyYXRlZ3koKVxuXHRcdFx0XHQuY2VudGVySG9yaXpvbnRhbGx5KClcblx0XHRcdFx0LmNlbnRlclZlcnRpY2FsbHkoKSxcblx0XHRcdHNjcm9sbFN0cmF0ZWd5OiB0aGlzLm92ZXJsYXkuc2Nyb2xsU3RyYXRlZ2llcy5ibG9jaygpXG5cdFx0fSk7XG5cdH1cblxuXHRwcml2YXRlIF9yZW1vdmVNb2RhbChtb2RhbDogRGFmZk1vZGFsKSB7XG5cdFx0Y29uc3QgaW5kZXggPSB0aGlzLl9tb2RhbHMuaW5kZXhPZihtb2RhbCk7XG5cdFx0aWYgKGluZGV4ID09PSAtMSkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFxuXHRcdFx0XHQnVGhlIE1vZGFsIHRoYXQgeW91IGFyZSB0cnlpbmcgdG8gcmVtb3ZlIGRvZXMgbm90IGV4aXN0LicsXG5cdFx0XHQpO1xuXHRcdH1cblxuXHRcdG1vZGFsLm92ZXJsYXkuZGlzcG9zZSgpO1xuXG5cdFx0dGhpcy5fbW9kYWxzID0gdGhpcy5fbW9kYWxzLmZpbHRlcihtID0+IG0gIT09IG1vZGFsKTtcblx0fVxuXG5cdG9wZW4oXG5cdFx0Y29tcG9uZW50OiBUeXBlPGFueT4sXG5cdFx0Y29uZmlndXJhdGlvbj86IFBhcnRpYWw8RGFmZk1vZGFsQ29uZmlndXJhdGlvbj4sXG5cdCk6IERhZmZNb2RhbCB7XG5cdFx0Y29uc3QgY29uZmlnID0geyAuLi50aGlzLmRlZmF1bHRDb25maWd1cmF0aW9uLCAuLi5jb25maWd1cmF0aW9uIH07XG5cdFx0Y29uc3QgX3JlZiA9IHRoaXMuX2NyZWF0ZU92ZXJsYXlSZWYoKTtcblx0XHRjb25zdCBfbW9kYWwgPSB0aGlzLl9hdHRhY2hNb2RhbChfcmVmKTtcblx0XHRjb25zdCBfYXR0YWNoZWRNb2RhbCA9IHRoaXMuX2F0dGFjaE1vZGFsQ29udGVudChjb21wb25lbnQsIF9tb2RhbCk7XG5cblx0XHRjb25zdCBtb2RhbDogRGFmZk1vZGFsID0ge1xuXHRcdFx0bW9kYWw6IF9tb2RhbCxcblx0XHRcdG92ZXJsYXk6IF9yZWYsXG5cdFx0fTtcblxuXHRcdHRoaXMuX21vZGFscy5wdXNoKG1vZGFsKTtcblxuXHRcdF9yZWZcblx0XHRcdC5iYWNrZHJvcENsaWNrKClcblx0XHRcdC5zdWJzY3JpYmUoKCkgPT5cblx0XHRcdFx0Y29uZmlnLm9uQmFja2Ryb3BDbGlja2VkXG5cdFx0XHRcdFx0PyBjb25maWcub25CYWNrZHJvcENsaWNrZWQoKVxuXHRcdFx0XHRcdDogdGhpcy5jbG9zZShtb2RhbCksXG5cdFx0XHQpO1xuXHRcdHJldHVybiBtb2RhbDtcblx0fVxuXG5cdGNsb3NlKG1vZGFsOiBEYWZmTW9kYWwpOiB2b2lkIHtcblx0XHRtb2RhbC5tb2RhbC5pbnN0YW5jZS5vcGVuID0gZmFsc2U7XG5cdFx0bW9kYWwub3ZlcmxheS5kZXRhY2hCYWNrZHJvcCgpO1xuXHRcdG1vZGFsLm1vZGFsLmluc3RhbmNlLmNsb3NlZEFuaW1hdGlvbkNvbXBsZXRlZC5zdWJzY3JpYmUoXG5cdFx0XHQoZTogQW5pbWF0aW9uRXZlbnQpID0+IHRoaXMuX3JlbW92ZU1vZGFsKG1vZGFsKSxcblx0XHQpO1xuXHR9XG59XG4iXX0=