import { EventEmitter, OnInit, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { DaffSidebarMode } from '../helper/sidebar-mode';
import { DaffSidebarComponent } from '../sidebar/sidebar.component';
export declare class DaffSidebarViewportComponent implements OnInit, AfterViewInit {
    private ref;
    constructor(ref: ChangeDetectorRef);
    /**
     * @docs-private
     */
    _animationState: string;
    /**
     * @docs-private
     */
    sidebar: DaffSidebarComponent;
    /**
     * Internal tracking variable for the state of sidebar viewport.
       * @docs-private
     */
    _opened: boolean;
    /**
     * @docs-private
     */
    _mode: DaffSidebarMode;
    /**
     * The mode to put the sidebar in
     */
    mode: DaffSidebarMode;
    /**
     * Input state for whether or not the backdrop is
     * "visible" to the human eye
     */
    backdropIsVisible: boolean;
    /**
     * Property for the "opened" state of the sidebar
     */
    opened: boolean;
    /**
     * Event fired when the backdrop is clicked
     * This is often used to close the sidebar
     */
    backdropClicked: EventEmitter<void>;
    /**
     * @docs-private
     */
    readonly animationsEnabled: boolean;
    /**
     * @docs-private
     */
    ngOnInit(): void;
    /**
     * @docs-private
     */
    ngAfterViewInit(): void;
    /**
     * @docs-private
     */
    _backdropClicked(): void;
    /**
     * @docs-private
     */
    readonly hasBackdrop: boolean;
    /**
     * @docs-private
     */
    onEscape(): void;
}
