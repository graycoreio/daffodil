import { OnInit } from '@angular/core';
export declare class DaffAccordionItemComponent implements OnInit {
    /**
     * @docs-private
     */
    faChevronDown: import("@fortawesome/fontawesome-common-types").IconDefinition;
    /**
     * @docs-private
     */
    faChevronUp: import("@fortawesome/fontawesome-common-types").IconDefinition;
    /**
     * @docs-private
     */
    class: boolean;
    initiallyActive: boolean;
    /**
     * @docs-private
     */
    _open: boolean;
    /**
     * @docs-private
     */
    _animationState: string;
    /**
     * @docs-private
     */
    ngOnInit(): void;
    toggleActive(): void;
}
