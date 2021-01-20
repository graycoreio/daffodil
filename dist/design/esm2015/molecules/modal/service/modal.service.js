/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { ComponentPortal } from '@angular/cdk/portal';
import { Overlay, GlobalPositionStrategy, } from '@angular/cdk/overlay';
import { DaffModalComponent } from '../modal/modal.component';
import { DaffModalModule } from '../modal.module';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/overlay";
import * as i2 from "../modal.module";
export class DaffModalService {
    /**
     * @param {?} overlay
     */
    constructor(overlay) {
        this.overlay = overlay;
        this._modals = [];
        this.defaultConfiguration = {};
    }
    /**
     * @private
     * @param {?} overlayRef
     * @return {?}
     */
    _attachModal(overlayRef) {
        /** @type {?} */
        const modal = overlayRef.attach(new ComponentPortal(DaffModalComponent));
        modal.instance.open = true;
        return modal;
    }
    /**
     * @private
     * @param {?} component
     * @param {?} modal
     * @return {?}
     */
    _attachModalContent(component, modal) {
        modal.instance.attachContent(new ComponentPortal(component));
    }
    /**
     * @private
     * @return {?}
     */
    _createOverlayRef() {
        return this.overlay.create({
            hasBackdrop: true,
            positionStrategy: new GlobalPositionStrategy()
                .centerHorizontally()
                .centerVertically(),
            scrollStrategy: this.overlay.scrollStrategies.block()
        });
    }
    /**
     * @private
     * @param {?} modal
     * @return {?}
     */
    _removeModal(modal) {
        /** @type {?} */
        const index = this._modals.indexOf(modal);
        if (index === -1) {
            throw new Error('The Modal that you are trying to remove does not exist.');
        }
        modal.overlay.dispose();
        this._modals = this._modals.filter((/**
         * @param {?} m
         * @return {?}
         */
        m => m !== modal));
    }
    /**
     * @param {?} component
     * @param {?=} configuration
     * @return {?}
     */
    open(component, configuration) {
        /** @type {?} */
        const config = Object.assign({}, this.defaultConfiguration, configuration);
        /** @type {?} */
        const _ref = this._createOverlayRef();
        /** @type {?} */
        const _modal = this._attachModal(_ref);
        /** @type {?} */
        const _attachedModal = this._attachModalContent(component, _modal);
        /** @type {?} */
        const modal = {
            modal: _modal,
            overlay: _ref,
        };
        this._modals.push(modal);
        _ref
            .backdropClick()
            .subscribe((/**
         * @return {?}
         */
        () => config.onBackdropClicked
            ? config.onBackdropClicked()
            : this.close(modal)));
        return modal;
    }
    /**
     * @param {?} modal
     * @return {?}
     */
    close(modal) {
        modal.modal.instance.open = false;
        modal.overlay.detachBackdrop();
        modal.modal.instance.closedAnimationCompleted.subscribe((/**
         * @param {?} e
         * @return {?}
         */
        (e) => this._removeModal(modal)));
    }
}
DaffModalService.decorators = [
    { type: Injectable, args: [{
                providedIn: DaffModalModule,
            },] }
];
/** @nocollapse */
DaffModalService.ctorParameters = () => [
    { type: Overlay }
];
/** @nocollapse */ DaffModalService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffModalService_Factory() { return new DaffModalService(i0.ɵɵinject(i1.Overlay)); }, token: DaffModalService, providedIn: i2.DaffModalModule });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9kZXNpZ24vIiwic291cmNlcyI6WyJtb2xlY3VsZXMvbW9kYWwvc2VydmljZS9tb2RhbC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFzQixNQUFNLGVBQWUsQ0FBQztBQUMvRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdEQsT0FBTyxFQUVOLE9BQU8sRUFDUCxzQkFBc0IsR0FDdEIsTUFBTSxzQkFBc0IsQ0FBQztBQUU5QixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUk5RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0saUJBQWlCLENBQUM7Ozs7QUFLbEQsTUFBTSxPQUFPLGdCQUFnQjs7OztJQUc1QixZQUFvQixPQUFnQjtRQUFoQixZQUFPLEdBQVAsT0FBTyxDQUFTO1FBRjVCLFlBQU8sR0FBZ0IsRUFBRSxDQUFDO1FBSTFCLHlCQUFvQixHQUEyQixFQUFFLENBQUM7SUFGbkIsQ0FBQzs7Ozs7O0lBSWhDLFlBQVksQ0FDbkIsVUFBc0I7O2NBRWhCLEtBQUssR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksZUFBZSxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFDeEUsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQzNCLE9BQU8sS0FBSyxDQUFDO0lBQ2QsQ0FBQzs7Ozs7OztJQUVPLG1CQUFtQixDQUMxQixTQUFvQixFQUNwQixLQUF1QztRQUV2QyxLQUFLLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLGVBQWUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO0lBQzlELENBQUM7Ozs7O0lBRU8saUJBQWlCO1FBQ3hCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7WUFDMUIsV0FBVyxFQUFFLElBQUk7WUFDakIsZ0JBQWdCLEVBQUUsSUFBSSxzQkFBc0IsRUFBRTtpQkFDNUMsa0JBQWtCLEVBQUU7aUJBQ3BCLGdCQUFnQixFQUFFO1lBQ3BCLGNBQWMsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRTtTQUNyRCxDQUFDLENBQUM7SUFDSixDQUFDOzs7Ozs7SUFFTyxZQUFZLENBQUMsS0FBZ0I7O2NBQzlCLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7UUFDekMsSUFBSSxLQUFLLEtBQUssQ0FBQyxDQUFDLEVBQUU7WUFDakIsTUFBTSxJQUFJLEtBQUssQ0FDZCx5REFBeUQsQ0FDekQsQ0FBQztTQUNGO1FBRUQsS0FBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUV4QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTTs7OztRQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLEtBQUssRUFBQyxDQUFDO0lBQ3RELENBQUM7Ozs7OztJQUVELElBQUksQ0FDSCxTQUFvQixFQUNwQixhQUErQzs7Y0FFekMsTUFBTSxxQkFBUSxJQUFJLENBQUMsb0JBQW9CLEVBQUssYUFBYSxDQUFFOztjQUMzRCxJQUFJLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixFQUFFOztjQUMvQixNQUFNLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUM7O2NBQ2hDLGNBQWMsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsU0FBUyxFQUFFLE1BQU0sQ0FBQzs7Y0FFNUQsS0FBSyxHQUFjO1lBQ3hCLEtBQUssRUFBRSxNQUFNO1lBQ2IsT0FBTyxFQUFFLElBQUk7U0FDYjtRQUVELElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRXpCLElBQUk7YUFDRixhQUFhLEVBQUU7YUFDZixTQUFTOzs7UUFBQyxHQUFHLEVBQUUsQ0FDZixNQUFNLENBQUMsaUJBQWlCO1lBQ3ZCLENBQUMsQ0FBQyxNQUFNLENBQUMsaUJBQWlCLEVBQUU7WUFDNUIsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQ3BCLENBQUM7UUFDSCxPQUFPLEtBQUssQ0FBQztJQUNkLENBQUM7Ozs7O0lBRUQsS0FBSyxDQUFDLEtBQWdCO1FBQ3JCLEtBQUssQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7UUFDbEMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUMvQixLQUFLLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyx3QkFBd0IsQ0FBQyxTQUFTOzs7O1FBQ3RELENBQUMsQ0FBaUIsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsRUFDL0MsQ0FBQztJQUNILENBQUM7OztZQWhGRCxVQUFVLFNBQUM7Z0JBQ1gsVUFBVSxFQUFFLGVBQWU7YUFDM0I7Ozs7WUFaQSxPQUFPOzs7Ozs7OztJQWNQLG1DQUFrQzs7Ozs7SUFJbEMsZ0RBQTBEOzs7OztJQUY5QyxtQ0FBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBUeXBlLCBDb21wb25lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbXBvbmVudFBvcnRhbCB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xuaW1wb3J0IHtcblx0T3ZlcmxheVJlZixcblx0T3ZlcmxheSxcblx0R2xvYmFsUG9zaXRpb25TdHJhdGVneSxcbn0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xuXG5pbXBvcnQgeyBEYWZmTW9kYWxDb21wb25lbnQgfSBmcm9tICcuLi9tb2RhbC9tb2RhbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRGFmZk1vZGFsQ29uZmlndXJhdGlvbiB9IGZyb20gJy4uL21vZGFsL21vZGFsLWNvbmZpZyc7XG5pbXBvcnQgeyBEYWZmTW9kYWwgfSBmcm9tICcuLi9tb2RhbCc7XG5pbXBvcnQgeyBBbmltYXRpb25FdmVudCB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHsgRGFmZk1vZGFsTW9kdWxlIH0gZnJvbSAnLi4vbW9kYWwubW9kdWxlJztcblxuQEluamVjdGFibGUoe1xuXHRwcm92aWRlZEluOiBEYWZmTW9kYWxNb2R1bGUsXG59KVxuZXhwb3J0IGNsYXNzIERhZmZNb2RhbFNlcnZpY2Uge1xuXHRwcml2YXRlIF9tb2RhbHM6IERhZmZNb2RhbFtdID0gW107XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBvdmVybGF5OiBPdmVybGF5KSB7fVxuXG5cdHByaXZhdGUgZGVmYXVsdENvbmZpZ3VyYXRpb246IERhZmZNb2RhbENvbmZpZ3VyYXRpb24gPSB7fTtcblxuXHRwcml2YXRlIF9hdHRhY2hNb2RhbChcblx0XHRvdmVybGF5UmVmOiBPdmVybGF5UmVmLFxuXHQpOiBDb21wb25lbnRSZWY8RGFmZk1vZGFsQ29tcG9uZW50PiB7XG5cdFx0Y29uc3QgbW9kYWwgPSBvdmVybGF5UmVmLmF0dGFjaChuZXcgQ29tcG9uZW50UG9ydGFsKERhZmZNb2RhbENvbXBvbmVudCkpO1xuXHRcdG1vZGFsLmluc3RhbmNlLm9wZW4gPSB0cnVlO1xuXHRcdHJldHVybiBtb2RhbDtcblx0fVxuXG5cdHByaXZhdGUgX2F0dGFjaE1vZGFsQ29udGVudChcblx0XHRjb21wb25lbnQ6IFR5cGU8YW55Pixcblx0XHRtb2RhbDogQ29tcG9uZW50UmVmPERhZmZNb2RhbENvbXBvbmVudD4sXG5cdCk6IHZvaWQge1xuXHRcdG1vZGFsLmluc3RhbmNlLmF0dGFjaENvbnRlbnQobmV3IENvbXBvbmVudFBvcnRhbChjb21wb25lbnQpKTtcblx0fVxuXG5cdHByaXZhdGUgX2NyZWF0ZU92ZXJsYXlSZWYoKTogT3ZlcmxheVJlZiB7XG5cdFx0cmV0dXJuIHRoaXMub3ZlcmxheS5jcmVhdGUoe1xuXHRcdFx0aGFzQmFja2Ryb3A6IHRydWUsXG5cdFx0XHRwb3NpdGlvblN0cmF0ZWd5OiBuZXcgR2xvYmFsUG9zaXRpb25TdHJhdGVneSgpXG5cdFx0XHRcdC5jZW50ZXJIb3Jpem9udGFsbHkoKVxuXHRcdFx0XHQuY2VudGVyVmVydGljYWxseSgpLFxuXHRcdFx0c2Nyb2xsU3RyYXRlZ3k6IHRoaXMub3ZlcmxheS5zY3JvbGxTdHJhdGVnaWVzLmJsb2NrKClcblx0XHR9KTtcblx0fVxuXG5cdHByaXZhdGUgX3JlbW92ZU1vZGFsKG1vZGFsOiBEYWZmTW9kYWwpIHtcblx0XHRjb25zdCBpbmRleCA9IHRoaXMuX21vZGFscy5pbmRleE9mKG1vZGFsKTtcblx0XHRpZiAoaW5kZXggPT09IC0xKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXG5cdFx0XHRcdCdUaGUgTW9kYWwgdGhhdCB5b3UgYXJlIHRyeWluZyB0byByZW1vdmUgZG9lcyBub3QgZXhpc3QuJyxcblx0XHRcdCk7XG5cdFx0fVxuXG5cdFx0bW9kYWwub3ZlcmxheS5kaXNwb3NlKCk7XG5cblx0XHR0aGlzLl9tb2RhbHMgPSB0aGlzLl9tb2RhbHMuZmlsdGVyKG0gPT4gbSAhPT0gbW9kYWwpO1xuXHR9XG5cblx0b3Blbihcblx0XHRjb21wb25lbnQ6IFR5cGU8YW55Pixcblx0XHRjb25maWd1cmF0aW9uPzogUGFydGlhbDxEYWZmTW9kYWxDb25maWd1cmF0aW9uPixcblx0KTogRGFmZk1vZGFsIHtcblx0XHRjb25zdCBjb25maWcgPSB7IC4uLnRoaXMuZGVmYXVsdENvbmZpZ3VyYXRpb24sIC4uLmNvbmZpZ3VyYXRpb24gfTtcblx0XHRjb25zdCBfcmVmID0gdGhpcy5fY3JlYXRlT3ZlcmxheVJlZigpO1xuXHRcdGNvbnN0IF9tb2RhbCA9IHRoaXMuX2F0dGFjaE1vZGFsKF9yZWYpO1xuXHRcdGNvbnN0IF9hdHRhY2hlZE1vZGFsID0gdGhpcy5fYXR0YWNoTW9kYWxDb250ZW50KGNvbXBvbmVudCwgX21vZGFsKTtcblxuXHRcdGNvbnN0IG1vZGFsOiBEYWZmTW9kYWwgPSB7XG5cdFx0XHRtb2RhbDogX21vZGFsLFxuXHRcdFx0b3ZlcmxheTogX3JlZixcblx0XHR9O1xuXG5cdFx0dGhpcy5fbW9kYWxzLnB1c2gobW9kYWwpO1xuXG5cdFx0X3JlZlxuXHRcdFx0LmJhY2tkcm9wQ2xpY2soKVxuXHRcdFx0LnN1YnNjcmliZSgoKSA9PlxuXHRcdFx0XHRjb25maWcub25CYWNrZHJvcENsaWNrZWRcblx0XHRcdFx0XHQ/IGNvbmZpZy5vbkJhY2tkcm9wQ2xpY2tlZCgpXG5cdFx0XHRcdFx0OiB0aGlzLmNsb3NlKG1vZGFsKSxcblx0XHRcdCk7XG5cdFx0cmV0dXJuIG1vZGFsO1xuXHR9XG5cblx0Y2xvc2UobW9kYWw6IERhZmZNb2RhbCk6IHZvaWQge1xuXHRcdG1vZGFsLm1vZGFsLmluc3RhbmNlLm9wZW4gPSBmYWxzZTtcblx0XHRtb2RhbC5vdmVybGF5LmRldGFjaEJhY2tkcm9wKCk7XG5cdFx0bW9kYWwubW9kYWwuaW5zdGFuY2UuY2xvc2VkQW5pbWF0aW9uQ29tcGxldGVkLnN1YnNjcmliZShcblx0XHRcdChlOiBBbmltYXRpb25FdmVudCkgPT4gdGhpcy5fcmVtb3ZlTW9kYWwobW9kYWwpLFxuXHRcdCk7XG5cdH1cbn1cbiJdfQ==