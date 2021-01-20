import { ElementRef } from '@angular/core';
/**
 * @deprecated
 * DaffListMode will be completely deprecated in v1.0.0
 * */
export declare type DaffListMode = 'multi-line' | 'link' | 'navigation' | undefined;
export declare enum DaffListModeEnum {
    Multiline = "multi-line",
    Link = "link",
    Navigation = "navigation"
}
export declare type DaffListType = 'daff-list' | 'daff-nav-list';
export declare class DaffListComponent {
    private elementRef;
    /**
     * @deprecated
     * */
    mode: DaffListMode;
    /**
     * @docs-private
     */
    readonly list: boolean;
    /**
       * @docs-private
     * @deprecated
     * */
    readonly multiline: boolean;
    /**
       * @docs-private
     * @deprecated
     * */
    readonly link: boolean;
    /**
       * @docs-private
     * @deprecated
     * */
    readonly navigation: boolean;
    /**
     * @docs-private
     */
    readonly listType: DaffListType;
    constructor(elementRef: ElementRef);
    /**
     * @docs-private
     */
    readonly nav: boolean;
    /**
     * Sets the role for a `<daff-nav-list>` to navigation.
       * @docs-private
     */
    readonly role: "navigation" | "list";
    private _getHostElement;
}
