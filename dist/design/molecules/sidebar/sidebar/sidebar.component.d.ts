import { NgZone, ElementRef, EventEmitter } from '@angular/core';
/**
 * DaffSidebar is heavily based upon the work done by the @angular/material2
 * team on `mat-drawer` and `mat-sidenav`. `daff-sidebar` is intended to be
 * a simplified version (with a different design) of `mat-drawer` which
 * follows a stricter "dumb" component pattern than `mat-drawer`
 */
export declare class DaffSidebarComponent {
    private _elementRef;
    private _ngZone;
    /**
     * Event fired when `ESC` key is pressed when the sidebar has focus
     */
    escapePressed: EventEmitter<void>;
    constructor(_elementRef: ElementRef<HTMLElement>, _ngZone: NgZone);
}
