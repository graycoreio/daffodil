/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
/** @enum {string} */
const DaffLogoTypeEnum = {
    ICON: 'icon',
    FULL: 'full',
};
export { DaffLogoTypeEnum };
/** @enum {string} */
const DaffLogoColorEnum = {
    BLACK: 'dark',
    WHITE: 'light',
    BASE: 'base',
    BASECONTRAST: 'baseContrast',
};
export { DaffLogoColorEnum };
export class DaffLogoComponent {
    constructor() {
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
     * @return {?}
     */
    isFull() {
        return this.type === DaffLogoTypeEnum.FULL;
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nby5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvYnJhbmRpbmcvIiwic291cmNlcyI6WyJsaWIvbG9nby9sb2dvLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSx1QkFBdUIsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7OztJQUl4RSxNQUFPLE1BQU07SUFDYixNQUFPLE1BQU07Ozs7O0lBS2IsT0FBUSxNQUFNO0lBQ2QsT0FBUSxPQUFPO0lBQ2YsTUFBTyxNQUFNO0lBQ2IsY0FBZSxjQUFjOzs7QUFTL0IsTUFBTSxPQUFPLGlCQUFpQjtJQU45Qjs7Ozs7OztRQWFXLFNBQUksR0FBaUIsZ0JBQWdCLENBQUMsSUFBSSxDQUFDOzs7Ozs7OztRQVMzQyxVQUFLLEdBQWtCLGlCQUFpQixDQUFDLFlBQVksQ0FBQzs7Ozs7OztRQVF0RCxlQUFVLEdBQUcsdUNBQXVDLENBQUM7SUFRaEUsQ0FBQzs7Ozs7SUFIQyxNQUFNO1FBQ0osT0FBTyxJQUFJLENBQUMsSUFBSSxLQUFLLGdCQUFnQixDQUFDLElBQUksQ0FBQztJQUM3QyxDQUFDOzs7WUFyQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxvQkFBb0I7Z0JBQzlCLDYyQ0FBb0M7Z0JBRXBDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOzthQUNoRDs7O21CQVFFLEtBQUs7b0JBU0wsS0FBSzt5QkFRTCxLQUFLOzs7Ozs7Ozs7O0lBakJOLGlDQUFvRDs7Ozs7Ozs7O0lBU3BELGtDQUErRDs7Ozs7Ozs7SUFRL0QsdUNBQThEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IHR5cGUgRGFmZkxvZ29UeXBlID0gJ2ljb24nIHwgJ2Z1bGwnO1xuZXhwb3J0IGVudW0gRGFmZkxvZ29UeXBlRW51bSB7XG4gIElDT04gPSAnaWNvbicsXG4gIEZVTEwgPSAnZnVsbCdcbn1cblxuZXhwb3J0IHR5cGUgRGFmZkxvZ29Db2xvciA9ICdkYXJrJyB8ICdsaWdodCcgfCAnYmFzZScgfCAnYmFzZUNvbnRyYXN0JztcbmV4cG9ydCBlbnVtIERhZmZMb2dvQ29sb3JFbnVtIHtcbiAgQkxBQ0sgPSAnZGFyaycsXG4gIFdISVRFID0gJ2xpZ2h0JyxcbiAgQkFTRSA9ICdiYXNlJyxcbiAgQkFTRUNPTlRSQVNUID0gJ2Jhc2VDb250cmFzdCdcbn0gXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RhZmYtYnJhbmRpbmctbG9nbycsXG4gIHRlbXBsYXRlVXJsOiAnLi9sb2dvLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbG9nby5jb21wb25lbnQuc2NzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBEYWZmTG9nb0NvbXBvbmVudCB7XG4gIC8qKlxuICAgKiBAZG9jc1xuICAgKiBcbiAgICogUmVuZGVyaW5nIHByb3BlcnR5IGZvciBzaG93aW5nIHRoZSBcImZ1bGxcIiBsb2dvXG4gICAqIHdpdGggdGVzdCwgb3Igb25seSB0aGUgZmxvd2VyLlxuICAgKi9cbiAgQElucHV0KCkgdHlwZTogRGFmZkxvZ29UeXBlID0gRGFmZkxvZ29UeXBlRW51bS5GVUxMO1xuXG4gIC8qKlxuICAgKiBAZG9jc1xuICAgKiBcbiAgICogRGV0ZXJtaW5lcyB0aGUgY29sb3Igb2YgdGhlIGxvZ28uIFRoZSBsb2dvIHN1cHBvcnRzIGEgXG4gICAqIHNtYWxsZXIgc3Vic2V0IG9mIERhZmZDb2xvcmFibGUsIHNvIGl0XG4gICAqIGhhcyBpdHMgb3duIGN1c3RvbSB0eXBlcy5cbiAgICovXG4gIEBJbnB1dCgpIGNvbG9yOiBEYWZmTG9nb0NvbG9yID0gRGFmZkxvZ29Db2xvckVudW0uQkFTRUNPTlRSQVNUO1xuXG4gIC8qKlxuICAgKiBAZG9jc1xuICAgKiBcbiAgICogUGF0aCB0byB0aGUgZmxvd2VyIGluIGEgcHJvamVjdCwgZGVmYXVsdHNcbiAgICogdG8gd2hhdCBpcyBoYW5kbGUgYnkgdGhlIGJyYW5kaW5nIHNjaGVtYXRpY3MuXG4gICAqL1xuICBASW5wdXQoKSBmbG93ZXJQYXRoID0gJy9hc3NldHMvZGFmZi1icmFuZGluZy9kYWZmLWZsb3dlci5zdmcnO1xuXG4gIC8qKlxuICAgKiBIZWxwZXIgZnVuY3Rpb24gdG8gZGV0ZXJtaW5lIGlmIHRoZSBsb2dvIHR5cGUgaXMgXCJmdWxsXCJcbiAgICovXG4gIGlzRnVsbCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy50eXBlID09PSBEYWZmTG9nb1R5cGVFbnVtLkZVTEw7XG4gIH1cbn1cbiJdfQ==