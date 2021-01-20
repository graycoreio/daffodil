/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Output, EventEmitter, Input, ChangeDetectionStrategy, HostListener, HostBinding } from '@angular/core';
import { daffBackdropAnimations } from '../animation/backdrop-animation';
var DaffBackdropComponent = /** @class */ (function () {
    function DaffBackdropComponent() {
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
     */
    /**
     * Animation hook for that controls the backdrops
     * entrance and fade animations.
     * @return {?}
     */
    DaffBackdropComponent.prototype.onBackdropClicked = /**
     * Animation hook for that controls the backdrops
     * entrance and fade animations.
     * @return {?}
     */
    function () {
        this.backdropClicked.emit();
    };
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
    return DaffBackdropComponent;
}());
export { DaffBackdropComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2Ryb3AuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2Rlc2lnbi8iLCJzb3VyY2VzIjpbIm1vbGVjdWxlcy9iYWNrZHJvcC9iYWNrZHJvcC9iYWNrZHJvcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsdUJBQXVCLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzSCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUV6RTtJQUFBOzs7OztRQWVXLGdCQUFXLEdBQVksS0FBSyxDQUFDOzs7Ozs7UUFPN0IsZUFBVSxHQUFZLEtBQUssQ0FBQzs7OztRQUszQixvQkFBZSxHQUF1QixJQUFJLFlBQVksRUFBUSxDQUFDO0lBZ0IzRSxDQUFDO0lBZEM7OztPQUdHOzs7Ozs7SUFRSCxpREFBaUI7Ozs7O0lBUGpCO1FBUUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUM5QixDQUFDOztnQkExQ0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxlQUFlO29CQUN6QixxSkFBd0M7b0JBRXhDLFVBQVUsRUFBRTt3QkFDVixzQkFBc0IsQ0FBQyxZQUFZO3FCQUNwQztvQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7aUJBQ2hEOzs7OEJBT0UsS0FBSzs2QkFPTCxLQUFLO2tDQUtMLE1BQU07b0NBTU4sV0FBVyxTQUFDLGVBQWUsY0FNM0IsWUFBWSxTQUFDLE9BQU87O0lBSXZCLDRCQUFDO0NBQUEsQUEzQ0QsSUEyQ0M7U0FsQ1kscUJBQXFCOzs7Ozs7SUFNaEMsNENBQXNDOzs7Ozs7SUFPdEMsMkNBQXFDOzs7OztJQUtyQyxnREFBeUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIEhvc3RMaXN0ZW5lciwgSG9zdEJpbmRpbmcgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgZGFmZkJhY2tkcm9wQW5pbWF0aW9ucyB9IGZyb20gJy4uL2FuaW1hdGlvbi9iYWNrZHJvcC1hbmltYXRpb24nO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkYWZmLWJhY2tkcm9wJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2JhY2tkcm9wLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYmFja2Ryb3AuY29tcG9uZW50LnNjc3MnXSxcbiAgYW5pbWF0aW9uczogW1xuICAgIGRhZmZCYWNrZHJvcEFuaW1hdGlvbnMuZmFkZUJhY2tkcm9wXG4gIF0sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIERhZmZCYWNrZHJvcENvbXBvbmVudCB7XG5cbiAgLyoqXG4gICAqIERldGVybWluZXMgd2hldGhlciBvciBub3QgdGhlIGJhY2tkcm9wIGlzIHRyYW5zcGFyZW50LlxuICAgKi9cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1pbmZlcnJhYmxlLXR5cGVzXG4gIEBJbnB1dCgpIHRyYW5zcGFyZW50OiBib29sZWFuID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIEJvb2xlYW4gcHJvcGVydHkgdGhhdCBkZXRlcm1pbmVzIHdoZXRoZXIgb3Igbm90IHRoZSBcbiAgICogYmFja2Ryb3Agc2hvdWxkIGZpbGwgdXAgaXRzIGNvbnRhaW5pbmcgd2luZG93LlxuICAgKi9cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1pbmZlcnJhYmxlLXR5cGVzXG4gIEBJbnB1dCgpIGZ1bGxzY3JlZW46IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKipcbiAgICogT3V0cHV0IGV2ZW50IHRyaWdnZXJlZCB3aGVuIHRoZSBiYWNrZHJvcCBpcyBjbGlja2VkLlxuICAgKi9cbiAgQE91dHB1dCgpIGJhY2tkcm9wQ2xpY2tlZDogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXG4gIC8qKlxuICAgKiBBbmltYXRpb24gaG9vayBmb3IgdGhhdCBjb250cm9scyB0aGUgYmFja2Ryb3BzIFxuICAgKiBlbnRyYW5jZSBhbmQgZmFkZSBhbmltYXRpb25zLlxuICAgKi9cbiAgQEhvc3RCaW5kaW5nKCdAZmFkZUJhY2tkcm9wJylcblxuICAvKipcbiAgICogQGRlcHJlY2F0ZWRcbiAgICogQmFja2Ryb3AgZXZlbnQgdGhhdCB0cmlnZ2VycyB3aGVuIHRoZSBiYWNrZHJvcCBlbGVtZW50IGlzIGNsaWNrZWQuXG4gICAqL1xuICBASG9zdExpc3RlbmVyKCdjbGljaycpXG4gIG9uQmFja2Ryb3BDbGlja2VkKCkgOiB2b2lkIHtcbiAgICB0aGlzLmJhY2tkcm9wQ2xpY2tlZC5lbWl0KCk7XG4gIH1cbn1cbiJdfQ==