/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
/** @enum {string} */
var DaffLogoTypeEnum = {
    ICON: 'icon',
    FULL: 'full',
};
export { DaffLogoTypeEnum };
/** @enum {string} */
var DaffLogoColorEnum = {
    BLACK: 'dark',
    WHITE: 'light',
    BASE: 'base',
    BASECONTRAST: 'baseContrast',
};
export { DaffLogoColorEnum };
var DaffLogoComponent = /** @class */ (function () {
    function DaffLogoComponent() {
        /**
         * \@docs
         *
         * Rendering property for showing the "full" logo
         * with test, or only the flower.
         */
        this.type = DaffLogoTypeEnum.FULL;
        /**
         * \@docs
         *
         * Determines the color of the logo. The logo supports a
         * smaller subset of DaffColorable, so it
         * has its own custom types.
         */
        this.color = DaffLogoColorEnum.BASECONTRAST;
        /**
         * \@docs
         *
         * Path to the flower in a project, defaults
         * to what is handle by the branding schematics.
         */
        this.flowerPath = '/assets/daff-branding/daff-flower.svg';
    }
    /**
     * Helper function to determine if the logo type is "full"
     */
    /**
     * Helper function to determine if the logo type is "full"
     * @return {?}
     */
    DaffLogoComponent.prototype.isFull = /**
     * Helper function to determine if the logo type is "full"
     * @return {?}
     */
    function () {
        return this.type === DaffLogoTypeEnum.FULL;
    };
    DaffLogoComponent.decorators = [
        { type: Component, args: [{
                    selector: 'daff-branding-logo',
                    template: "<div class=\"daff-logo daff-logo--full\" *ngIf=\"isFull()\">\n    <svg class=\"daff\" viewBox=\"0 0 239.55 50.61\"><path d=\"M44.08,24.64A29.4,29.4,0,0,1,41.22,38a20.69,20.69,0,0,1-8.14,8.77,24.19,24.19,0,0,1-12.4,3.08H0V0H20.83A24.3,24.3,0,0,1,33.56,3.15a20,20,0,0,1,7.88,8.7A29.37,29.37,0,0,1,44.08,24.64Zm-11.88,0q0-7.11-2.93-11.22t-8.59-4.1H11.44V40.63h8.73a10.74,10.74,0,0,0,8.8-4Q32.2,32.71,32.2,24.64Z\"/><path d=\"M69.17,49.88,88.24,0H99l18.92,49.29-11.29,1.32-4-11.52H84.49L80.61,49.88ZM87.72,30H99.24L93.37,14.52Z\"/><path d=\"M158.13,20.9h15.48l1.32,9h-16.8v20H146.69V.07h30.37l1.32,9H158.13Z\"/><path d=\"M219.31,20.9h15.47l1.32,9H219.31v20H207.86V.07h30.37l1.32,9H219.31Z\"/></svg>\n    <div class=\"spacer\"></div>\n    <img class=\"flower\" [src]=\"flowerPath\" alt=\"Daffodil Logo\"/>\n    <div class=\"spacer\"></div>\n    <svg class=\"dil\" viewBox=\"0 0 154.39 50.61\"><path d=\"M44.08,25A29.4,29.4,0,0,1,41.22,38.4a20.61,20.61,0,0,1-8.14,8.76,24.09,24.09,0,0,1-12.4,3.08H0V.37H20.83A24.3,24.3,0,0,1,33.56,3.52a20,20,0,0,1,7.88,8.69A29.42,29.42,0,0,1,44.08,25ZM32.2,25q0-7.11-2.94-11.22a9.86,9.86,0,0,0-8.58-4.11H11.44V41h8.73A10.74,10.74,0,0,0,29,37Q32.2,33.08,32.2,25Z\"/><path d=\"M85.89.37V50.24H74.45V.37Z\"/><path d=\"M131.44,41.29h21.63l1.32,9H120V.37h11.45Z\"/></svg>\n</div>\n\n<img [src]=\"flowerPath\" alt=\"Daffodil Logo\" *ngIf=\"!isFull()\"/>  ",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: [":host{display:block;width:100%}.daff-logo--full{display:flex;align-items:center}.daff-logo--full .spacer{flex:1 0 3.5%}.daff-logo--full .daff{flex:1 0 47%}.daff-logo--full .flower{display:block;max-width:100%;min-width:0;flex:1 0 16%}.daff-logo--full .dil{flex:1 0 30%}.daff-logo--full .daff,.daff-logo--full .dil{width:100%}"]
                }] }
    ];
    DaffLogoComponent.propDecorators = {
        type: [{ type: Input }],
        color: [{ type: Input }],
        flowerPath: [{ type: Input }]
    };
    return DaffLogoComponent;
}());
export { DaffLogoComponent };
if (false) {
    /**
     * \@docs
     *
     * Rendering property for showing the "full" logo
     * with test, or only the flower.
     * @type {?}
     */
    DaffLogoComponent.prototype.type;
    /**
     * \@docs
     *
     * Determines the color of the logo. The logo supports a
     * smaller subset of DaffColorable, so it
     * has its own custom types.
     * @type {?}
     */
    DaffLogoComponent.prototype.color;
    /**
     * \@docs
     *
     * Path to the flower in a project, defaults
     * to what is handle by the branding schematics.
     * @type {?}
     */
    DaffLogoComponent.prototype.flowerPath;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nby5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvYnJhbmRpbmcvIiwic291cmNlcyI6WyJsaWIvbG9nby9sb2dvLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSx1QkFBdUIsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7OztJQUl4RSxNQUFPLE1BQU07SUFDYixNQUFPLE1BQU07Ozs7O0lBS2IsT0FBUSxNQUFNO0lBQ2QsT0FBUSxPQUFPO0lBQ2YsTUFBTyxNQUFNO0lBQ2IsY0FBZSxjQUFjOzs7QUFHL0I7SUFBQTs7Ozs7OztRQWFXLFNBQUksR0FBaUIsZ0JBQWdCLENBQUMsSUFBSSxDQUFDOzs7Ozs7OztRQVMzQyxVQUFLLEdBQWtCLGlCQUFpQixDQUFDLFlBQVksQ0FBQzs7Ozs7OztRQVF0RCxlQUFVLEdBQUcsdUNBQXVDLENBQUM7SUFRaEUsQ0FBQztJQU5DOztPQUVHOzs7OztJQUNILGtDQUFNOzs7O0lBQU47UUFDRSxPQUFPLElBQUksQ0FBQyxJQUFJLEtBQUssZ0JBQWdCLENBQUMsSUFBSSxDQUFDO0lBQzdDLENBQUM7O2dCQXJDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtvQkFDOUIsNjJDQUFvQztvQkFFcEMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07O2lCQUNoRDs7O3VCQVFFLEtBQUs7d0JBU0wsS0FBSzs2QkFRTCxLQUFLOztJQVFSLHdCQUFDO0NBQUEsQUF0Q0QsSUFzQ0M7U0FoQ1ksaUJBQWlCOzs7Ozs7Ozs7SUFPNUIsaUNBQW9EOzs7Ozs7Ozs7SUFTcEQsa0NBQStEOzs7Ozs7OztJQVEvRCx1Q0FBOEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgdHlwZSBEYWZmTG9nb1R5cGUgPSAnaWNvbicgfCAnZnVsbCc7XG5leHBvcnQgZW51bSBEYWZmTG9nb1R5cGVFbnVtIHtcbiAgSUNPTiA9ICdpY29uJyxcbiAgRlVMTCA9ICdmdWxsJ1xufVxuXG5leHBvcnQgdHlwZSBEYWZmTG9nb0NvbG9yID0gJ2RhcmsnIHwgJ2xpZ2h0JyB8ICdiYXNlJyB8ICdiYXNlQ29udHJhc3QnO1xuZXhwb3J0IGVudW0gRGFmZkxvZ29Db2xvckVudW0ge1xuICBCTEFDSyA9ICdkYXJrJyxcbiAgV0hJVEUgPSAnbGlnaHQnLFxuICBCQVNFID0gJ2Jhc2UnLFxuICBCQVNFQ09OVFJBU1QgPSAnYmFzZUNvbnRyYXN0J1xufSBcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZGFmZi1icmFuZGluZy1sb2dvJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2xvZ28uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9sb2dvLmNvbXBvbmVudC5zY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIERhZmZMb2dvQ29tcG9uZW50IHtcbiAgLyoqXG4gICAqIEBkb2NzXG4gICAqIFxuICAgKiBSZW5kZXJpbmcgcHJvcGVydHkgZm9yIHNob3dpbmcgdGhlIFwiZnVsbFwiIGxvZ29cbiAgICogd2l0aCB0ZXN0LCBvciBvbmx5IHRoZSBmbG93ZXIuXG4gICAqL1xuICBASW5wdXQoKSB0eXBlOiBEYWZmTG9nb1R5cGUgPSBEYWZmTG9nb1R5cGVFbnVtLkZVTEw7XG5cbiAgLyoqXG4gICAqIEBkb2NzXG4gICAqIFxuICAgKiBEZXRlcm1pbmVzIHRoZSBjb2xvciBvZiB0aGUgbG9nby4gVGhlIGxvZ28gc3VwcG9ydHMgYSBcbiAgICogc21hbGxlciBzdWJzZXQgb2YgRGFmZkNvbG9yYWJsZSwgc28gaXRcbiAgICogaGFzIGl0cyBvd24gY3VzdG9tIHR5cGVzLlxuICAgKi9cbiAgQElucHV0KCkgY29sb3I6IERhZmZMb2dvQ29sb3IgPSBEYWZmTG9nb0NvbG9yRW51bS5CQVNFQ09OVFJBU1Q7XG5cbiAgLyoqXG4gICAqIEBkb2NzXG4gICAqIFxuICAgKiBQYXRoIHRvIHRoZSBmbG93ZXIgaW4gYSBwcm9qZWN0LCBkZWZhdWx0c1xuICAgKiB0byB3aGF0IGlzIGhhbmRsZSBieSB0aGUgYnJhbmRpbmcgc2NoZW1hdGljcy5cbiAgICovXG4gIEBJbnB1dCgpIGZsb3dlclBhdGggPSAnL2Fzc2V0cy9kYWZmLWJyYW5kaW5nL2RhZmYtZmxvd2VyLnN2Zyc7XG5cbiAgLyoqXG4gICAqIEhlbHBlciBmdW5jdGlvbiB0byBkZXRlcm1pbmUgaWYgdGhlIGxvZ28gdHlwZSBpcyBcImZ1bGxcIlxuICAgKi9cbiAgaXNGdWxsKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnR5cGUgPT09IERhZmZMb2dvVHlwZUVudW0uRlVMTDtcbiAgfVxufVxuIl19