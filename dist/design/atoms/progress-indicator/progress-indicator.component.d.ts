import { ElementRef, EventEmitter, Renderer2 } from '@angular/core';
import { AnimationEvent } from '@angular/animations';
import { DaffColorable, DaffPalette } from '../../core/colorable/colorable';
/**
 * An _elementRef and an instance of renderer2 are needed for the Colorable mixin
 */
declare class DaffProgressIndicatorBase {
    _elementRef: ElementRef;
    _renderer: Renderer2;
    constructor(_elementRef: ElementRef, _renderer: Renderer2);
}
declare const _daffProgressIndicatorBase: {
    new (...args: any[]): {
        _color: DaffPalette;
        color: DaffPalette;
        _elementRef: ElementRef<any>;
        _renderer: Renderer2;
    };
} & typeof DaffProgressIndicatorBase;
export declare class DaffProgressIndicatorComponent extends _daffProgressIndicatorBase implements DaffColorable {
    private elementRef;
    private renderer;
    /**
     * @docs-private
     */
    class: boolean;
    /**
     * The color of the progress indicator
     * See DaffColorable
     */
    color: DaffPalette;
    /**
     * The percentage completion of the progression,
     * expressed as a whole number between 0 and 100.
     *
     */
    percentage: number;
    /**
     * An event that emits each time the progression reaches 100%
     * and the animation is finished
     */
    finished: EventEmitter<void>;
    /**
     * Calculates when the progress animation is fully completed
     * @param event: AnimationEvent
     */
    onAnimationComplete(event: AnimationEvent): void;
    /**
     * @docs-private
     */
    readonly fillState: any;
    constructor(elementRef: ElementRef, renderer: Renderer2);
}
export {};
