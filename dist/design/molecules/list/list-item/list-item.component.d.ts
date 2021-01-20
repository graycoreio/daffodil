import { ElementRef } from '@angular/core';
import { DaffPrefixDirective, DaffSuffixDirective } from '../../../core/prefix-suffix/public_api';
export declare class DaffListItemComponent {
    private elementRef;
    /**
     * @docs-private
     */
    class: boolean;
    /**
     * @docs-private
     */
    _prefix: DaffPrefixDirective;
    /**
     * @docs-private
     */
    _suffix: DaffSuffixDirective;
    constructor(elementRef: ElementRef);
    /**
     * Sets the role for a regular `<daff-list-item>` to listitem.
       * @docs-private
     */
    readonly role: string;
    private _getHostElement;
    /** Gets whether a list item has one of the given attributes. */
    private _isAnchor;
}
