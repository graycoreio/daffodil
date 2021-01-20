import { EventEmitter } from '@angular/core';
export declare class DaffBackdropComponent {
    /**
     * Determines whether or not the backdrop is transparent.
     */
    transparent: boolean;
    /**
     * Boolean property that determines whether or not the
     * backdrop should fill up its containing window.
     */
    fullscreen: boolean;
    /**
     * Output event triggered when the backdrop is clicked.
     */
    backdropClicked: EventEmitter<void>;
    /**
     * Animation hook for that controls the backdrops
     * entrance and fade animations.
     */
    onBackdropClicked(): void;
}
