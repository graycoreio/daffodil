/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewEncapsulation, NgZone, ElementRef, Output, EventEmitter } from '@angular/core';
import { filter } from 'rxjs/operators';
import { fromEvent } from 'rxjs';
/**
 * DaffSidebar is heavily based upon the work done by the \@angular/material2
 * team on `mat-drawer` and `mat-sidenav`. `daff-sidebar` is intended to be
 * a simplified version (with a different design) of `mat-drawer` which
 * follows a stricter "dumb" component pattern than `mat-drawer`
 */
var DaffSidebarComponent = /** @class */ (function () {
    function DaffSidebarComponent(_elementRef, _ngZone) {
        var _this = this;
        this._elementRef = _elementRef;
        this._ngZone = _ngZone;
        /**
         * Event fired when `ESC` key is pressed when the sidebar has focus
         */
        this.escapePressed = new EventEmitter();
        /**
         * Listen to `keydown` events outside the zone so that change detection is not run every
         * time a key is pressed. Instead we re-enter the zone only if the `ESC` key is pressed.
         *
         */
        this._ngZone.runOutsideAngular((/**
         * @return {?}
         */
        function () {
            fromEvent(_this._elementRef.nativeElement, 'keydown').pipe(filter((/**
             * @param {?} event
             * @return {?}
             */
            function (event) { return event.key === 'Escape'; }))).subscribe((/**
             * @param {?} event
             * @return {?}
             */
            function (event) { return _this._ngZone.run((/**
             * @return {?}
             */
            function () {
                _this.escapePressed.emit();
                event.stopPropagation();
            })); }));
        }));
    }
    DaffSidebarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'daff-sidebar',
                    template: '<ng-content></ng-content>',
                    host: {
                        'class': 'daff-sidebar'
                    },
                    encapsulation: ViewEncapsulation.None,
                    styles: [":host{display:block}.daff-sidebar{display:block;height:100%}"]
                }] }
    ];
    /** @nocollapse */
    DaffSidebarComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: NgZone }
    ]; };
    DaffSidebarComponent.propDecorators = {
        escapePressed: [{ type: Output }]
    };
    return DaffSidebarComponent;
}());
export { DaffSidebarComponent };
if (false) {
    /**
     * Event fired when `ESC` key is pressed when the sidebar has focus
     * @type {?}
     */
    DaffSidebarComponent.prototype.escapePressed;
    /**
     * @type {?}
     * @private
     */
    DaffSidebarComponent.prototype._elementRef;
    /**
     * @type {?}
     * @private
     */
    DaffSidebarComponent.prototype._ngZone;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZWJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvZGVzaWduLyIsInNvdXJjZXMiOlsibW9sZWN1bGVzL3NpZGViYXIvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFdkcsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3hDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxNQUFNLENBQUM7Ozs7Ozs7QUFRakM7SUFlRSw4QkFDVSxXQUFvQyxFQUNwQyxPQUFlO1FBRnpCLGlCQWtCQztRQWpCUyxnQkFBVyxHQUFYLFdBQVcsQ0FBeUI7UUFDcEMsWUFBTyxHQUFQLE9BQU8sQ0FBUTs7OztRQUpmLGtCQUFhLEdBQXVCLElBQUksWUFBWSxFQUFRLENBQUM7UUFPckU7Ozs7V0FJRztRQUNILElBQUksQ0FBQyxPQUFPLENBQUMsaUJBQWlCOzs7UUFBQztZQUM3QixTQUFTLENBQWdCLEtBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FDcEUsTUFBTTs7OztZQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSyxDQUFDLEdBQUcsS0FBSyxRQUFRLEVBQXRCLENBQXNCLEVBQUMsQ0FDMUMsQ0FBQyxTQUFTOzs7O1lBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFJLENBQUMsT0FBTyxDQUFDLEdBQUc7OztZQUFDO2dCQUNsQyxLQUFJLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUMxQixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7WUFDNUIsQ0FBQyxFQUFDLEVBSG1CLENBR25CLEVBQUMsQ0FBQztRQUNOLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Z0JBakNGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsY0FBYztvQkFFeEIsUUFBUSxFQUFFLDJCQUEyQjtvQkFDckMsSUFBSSxFQUFFO3dCQUNKLE9BQU8sRUFBRSxjQUFjO3FCQUN4QjtvQkFDRCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTs7aUJBQ3RDOzs7O2dCQW5COEMsVUFBVTtnQkFBbEIsTUFBTTs7O2dDQXdCMUMsTUFBTTs7SUFxQlQsMkJBQUM7Q0FBQSxBQWxDRCxJQWtDQztTQXpCWSxvQkFBb0I7Ozs7OztJQUkvQiw2Q0FBdUU7Ozs7O0lBR3JFLDJDQUE0Qzs7Ozs7SUFDNUMsdUNBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3RW5jYXBzdWxhdGlvbiwgTmdab25lLCBFbGVtZW50UmVmLCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBmaWx0ZXIgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBmcm9tRXZlbnQgfSBmcm9tICdyeGpzJztcblxuLyoqXG4gKiBEYWZmU2lkZWJhciBpcyBoZWF2aWx5IGJhc2VkIHVwb24gdGhlIHdvcmsgZG9uZSBieSB0aGUgQGFuZ3VsYXIvbWF0ZXJpYWwyXG4gKiB0ZWFtIG9uIGBtYXQtZHJhd2VyYCBhbmQgYG1hdC1zaWRlbmF2YC4gYGRhZmYtc2lkZWJhcmAgaXMgaW50ZW5kZWQgdG8gYmVcbiAqIGEgc2ltcGxpZmllZCB2ZXJzaW9uICh3aXRoIGEgZGlmZmVyZW50IGRlc2lnbikgb2YgYG1hdC1kcmF3ZXJgIHdoaWNoIFxuICogZm9sbG93cyBhIHN0cmljdGVyIFwiZHVtYlwiIGNvbXBvbmVudCBwYXR0ZXJuIHRoYW4gYG1hdC1kcmF3ZXJgXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RhZmYtc2lkZWJhcicsXG4gIHN0eWxlVXJsczogWycuL3NpZGViYXIuY29tcG9uZW50LnNjc3MnXSxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+JyxcbiAgaG9zdDoge1xuICAgICdjbGFzcyc6ICdkYWZmLXNpZGViYXInXG4gIH0sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgRGFmZlNpZGViYXJDb21wb25lbnQge1xuICAvKipcbiAgICogRXZlbnQgZmlyZWQgd2hlbiBgRVNDYCBrZXkgaXMgcHJlc3NlZCB3aGVuIHRoZSBzaWRlYmFyIGhhcyBmb2N1c1xuICAgKi9cbiAgQE91dHB1dCgpIGVzY2FwZVByZXNzZWQ6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PixcbiAgICBwcml2YXRlIF9uZ1pvbmU6IE5nWm9uZVxuICAgICkge1xuXG4gICAgLyoqXG4gICAgICogTGlzdGVuIHRvIGBrZXlkb3duYCBldmVudHMgb3V0c2lkZSB0aGUgem9uZSBzbyB0aGF0IGNoYW5nZSBkZXRlY3Rpb24gaXMgbm90IHJ1biBldmVyeVxuICAgICAqIHRpbWUgYSBrZXkgaXMgcHJlc3NlZC4gSW5zdGVhZCB3ZSByZS1lbnRlciB0aGUgem9uZSBvbmx5IGlmIHRoZSBgRVNDYCBrZXkgaXMgcHJlc3NlZC5cbiAgICAgKlxuICAgICAqL1xuICAgIHRoaXMuX25nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICBmcm9tRXZlbnQ8S2V5Ym9hcmRFdmVudD4odGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAna2V5ZG93bicpLnBpcGUoXG4gICAgICAgICAgZmlsdGVyKGV2ZW50ID0+IGV2ZW50LmtleSA9PT0gJ0VzY2FwZScpXG4gICAgICApLnN1YnNjcmliZShldmVudCA9PiB0aGlzLl9uZ1pvbmUucnVuKCgpID0+IHtcbiAgICAgICAgICB0aGlzLmVzY2FwZVByZXNzZWQuZW1pdCgpO1xuICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgfSkpO1xuICAgIH0pO1xuICB9XG59XG4iXX0=