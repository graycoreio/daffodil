/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewEncapsulation } from '@angular/core';
var DaffImageGalleryComponent = /** @class */ (function () {
    function DaffImageGalleryComponent() {
    }
    DaffImageGalleryComponent.decorators = [
        { type: Component, args: [{
                    selector: 'daff-image-gallery',
                    template: "<div class=\"daff-image-gallery\">\n  <div class=\"daff-image-gallery__active-image\">\n    <ng-content select=\"[daff-active-image]\"></ng-content>\n  </div>\n\n  <daff-image-list class=\"daff-image-gallery__image-list\">\n    <ng-content select=\"daff-gallery-image\"></ng-content>\n  </daff-image-list>\n</div>\n",
                    encapsulation: ViewEncapsulation.None,
                    styles: [".daff-image-gallery{display:-ms-grid;display:grid;flex-direction:column;grid-template-areas:'active-image' 'image-list';max-height:100%}@media (min-width:1024px){.daff-image-gallery{grid-template-areas:'image-list active-image';max-height:-webkit-min-content;max-height:-moz-min-content;max-height:min-content}}.daff-image-gallery__active-image{-ms-grid-row:1;-ms-grid-column:1;grid-area:active-image}.daff-image-gallery__active-image img{display:block;max-width:100%}.daff-image-gallery__image-list{-ms-grid-row:2;-ms-grid-column:1;grid-area:image-list;margin:5px 0 0;max-height:100%}@media (min-width:1024px){.daff-image-gallery__active-image{-ms-grid-row:1;-ms-grid-column:2}.daff-image-gallery__image-list{-ms-grid-row:1;-ms-grid-column:1;margin:0 25px 0 0;max-height:-webkit-fill-available}}.daff-image-gallery__daff-gallery-image img{display:block;opacity:.6;width:90px}.daff-image-gallery__daff-gallery-image--selected img{opacity:1}"]
                }] }
    ];
    return DaffImageGalleryComponent;
}());
export { DaffImageGalleryComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2UtZ2FsbGVyeS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvZGVzaWduLyIsInNvdXJjZXMiOlsibW9sZWN1bGVzL2ltYWdlLWdhbGxlcnkvaW1hZ2UtZ2FsbGVyeS9pbWFnZS1nYWxsZXJ5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU3RDtJQUFBO0lBTXdDLENBQUM7O2dCQU54QyxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtvQkFDOUIsdVVBQTZDO29CQUU3QyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTs7aUJBQ3RDOztJQUN1QyxnQ0FBQztDQUFBLEFBTnpDLElBTXlDO1NBQTVCLHlCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZGFmZi1pbWFnZS1nYWxsZXJ5JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2ltYWdlLWdhbGxlcnkuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9pbWFnZS1nYWxsZXJ5LmNvbXBvbmVudC5zY3NzJ10sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgRGFmZkltYWdlR2FsbGVyeUNvbXBvbmVudCB7fVxuIl19