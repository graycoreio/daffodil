/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Output, EventEmitter, Input, ChangeDetectionStrategy, HostListener, HostBinding } from '@angular/core';
import { daffBackdropAnimations } from '../animation/backdrop-animation';
export class DaffBackdropComponent {
    constructor() {
        /**
         * Determines whether or not the backdrop is transparent.
         */
        // tslint:disable-next-line: no-inferrable-types
        this.transparent = false;
        /**
         * Boolean property that determines whether or not the
         * backdrop should fill up its containing window.
         */
        // tslint:disable-next-line: no-inferrable-types
        this.fullscreen = false;
        /**
         * Output event triggered when the backdrop is clicked.
         */
        this.backdropClicked = new EventEmitter();
    }
    /**
     * Animation hook for that controls the backdrops
     * entrance and fade animations.
     * @return {?}
     */
    onBackdropClicked() {
        this.backdropClicked.emit();
    }
}
DaffBackdropComponent.decorators = [
    { type: Component, args: [{
                selector: 'daff-backdrop',
                template: "<div class=\"daff-backdrop\" [class.daff-backdrop--fullscreen]=\"fullscreen\" [class.daff-backdrop--transparent]=\"transparent\"></div>\n",
                animations: [
                    daffBackdropAnimations.fadeBackdrop
                ],
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [":host{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:block;-webkit-tap-highlight-color:transparent}.daff-backdrop{background:rgba(0,0,0,.3);height:100%;width:100%}.daff-backdrop--transparent{background:0 0}.daff-backdrop:active,.daff-backdrop:focus,.daff-backdrop:visited{outline:0}.daff-backdrop--fullscreen{position:absolute}"]
            }] }
];
DaffBackdropComponent.propDecorators = {
    transparent: [{ type: Input }],
    fullscreen: [{ type: Input }],
    backdropClicked: [{ type: Output }],
    onBackdropClicked: [{ type: HostBinding, args: ['@fadeBackdrop',] }, { type: HostListener, args: ['click',] }]
};
if (false) {
    /**
     * Determines whether or not the backdrop is transparent.
     * @type {?}
     */
    DaffBackdropComponent.prototype.transparent;
    /**
     * Boolean property that determines whether or not the
     * backdrop should fill up its containing window.
     * @type {?}
     */
    DaffBackdropComponent.prototype.fullscreen;
    /**
     * Output event triggered when the backdrop is clicked.
     * @type {?}
     */
    DaffBackdropComponent.prototype.backdropClicked;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2Ryb3AuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2Rlc2lnbi8iLCJzb3VyY2VzIjpbIm1vbGVjdWxlcy9iYWNrZHJvcC9iYWNrZHJvcC9iYWNrZHJvcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsdUJBQXVCLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzSCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQVd6RSxNQUFNLE9BQU8scUJBQXFCO0lBVGxDOzs7OztRQWVXLGdCQUFXLEdBQVksS0FBSyxDQUFDOzs7Ozs7UUFPN0IsZUFBVSxHQUFZLEtBQUssQ0FBQzs7OztRQUszQixvQkFBZSxHQUF1QixJQUFJLFlBQVksRUFBUSxDQUFDO0lBZ0IzRSxDQUFDOzs7Ozs7SUFIQyxpQkFBaUI7UUFDZixJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQzlCLENBQUM7OztZQTFDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGVBQWU7Z0JBQ3pCLHFKQUF3QztnQkFFeEMsVUFBVSxFQUFFO29CQUNWLHNCQUFzQixDQUFDLFlBQVk7aUJBQ3BDO2dCQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOzthQUNoRDs7OzBCQU9FLEtBQUs7eUJBT0wsS0FBSzs4QkFLTCxNQUFNO2dDQU1OLFdBQVcsU0FBQyxlQUFlLGNBTTNCLFlBQVksU0FBQyxPQUFPOzs7Ozs7O0lBeEJyQiw0Q0FBc0M7Ozs7OztJQU90QywyQ0FBcUM7Ozs7O0lBS3JDLGdEQUF5RSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIElucHV0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgSG9zdExpc3RlbmVyLCBIb3N0QmluZGluZyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBkYWZmQmFja2Ryb3BBbmltYXRpb25zIH0gZnJvbSAnLi4vYW5pbWF0aW9uL2JhY2tkcm9wLWFuaW1hdGlvbic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RhZmYtYmFja2Ryb3AnLFxuICB0ZW1wbGF0ZVVybDogJy4vYmFja2Ryb3AuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9iYWNrZHJvcC5jb21wb25lbnQuc2NzcyddLFxuICBhbmltYXRpb25zOiBbXG4gICAgZGFmZkJhY2tkcm9wQW5pbWF0aW9ucy5mYWRlQmFja2Ryb3BcbiAgXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgRGFmZkJhY2tkcm9wQ29tcG9uZW50IHtcblxuICAvKipcbiAgICogRGV0ZXJtaW5lcyB3aGV0aGVyIG9yIG5vdCB0aGUgYmFja2Ryb3AgaXMgdHJhbnNwYXJlbnQuXG4gICAqL1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWluZmVycmFibGUtdHlwZXNcbiAgQElucHV0KCkgdHJhbnNwYXJlbnQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKipcbiAgICogQm9vbGVhbiBwcm9wZXJ0eSB0aGF0IGRldGVybWluZXMgd2hldGhlciBvciBub3QgdGhlIFxuICAgKiBiYWNrZHJvcCBzaG91bGQgZmlsbCB1cCBpdHMgY29udGFpbmluZyB3aW5kb3cuXG4gICAqL1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWluZmVycmFibGUtdHlwZXNcbiAgQElucHV0KCkgZnVsbHNjcmVlbjogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBPdXRwdXQgZXZlbnQgdHJpZ2dlcmVkIHdoZW4gdGhlIGJhY2tkcm9wIGlzIGNsaWNrZWQuXG4gICAqL1xuICBAT3V0cHV0KCkgYmFja2Ryb3BDbGlja2VkOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cbiAgLyoqXG4gICAqIEFuaW1hdGlvbiBob29rIGZvciB0aGF0IGNvbnRyb2xzIHRoZSBiYWNrZHJvcHMgXG4gICAqIGVudHJhbmNlIGFuZCBmYWRlIGFuaW1hdGlvbnMuXG4gICAqL1xuICBASG9zdEJpbmRpbmcoJ0BmYWRlQmFja2Ryb3AnKVxuXG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZFxuICAgKiBCYWNrZHJvcCBldmVudCB0aGF0IHRyaWdnZXJzIHdoZW4gdGhlIGJhY2tkcm9wIGVsZW1lbnQgaXMgY2xpY2tlZC5cbiAgICovXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJylcbiAgb25CYWNrZHJvcENsaWNrZWQoKSA6IHZvaWQge1xuICAgIHRoaXMuYmFja2Ryb3BDbGlja2VkLmVtaXQoKTtcbiAgfVxufVxuIl19