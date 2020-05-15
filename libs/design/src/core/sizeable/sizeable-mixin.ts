import { DaffSizeAllType } from './sizeable';
import { Constructor } from '../constructor/constructor';
import { ElementRef, Renderer2 } from '@angular/core';

interface HasElementRef {
	_elementRef: ElementRef;
	_renderer: Renderer2;
}

export function 
    daffSizeMixin<T extends Constructor<HasElementRef>>(Base: T, defaultSize?: DaffSizeAllType) {
    return class extends Base {
        //TODO move this back to private in Typescript 3.1
        _size: DaffSizeAllType;

        get size(): DaffSizeAllType{return this._size;}
        set size(value: DaffSizeAllType) {
            // Handles the default size
            const incomingSize = value || defaultSize;

            if(incomingSize !== this._size){ //Only run the dom-render if a change occurs
                //Remove the old size
                if(this._size){
                    this._renderer.removeClass(this._elementRef.nativeElement, `daff-${this._size}`);
                }

                if(incomingSize){
                    this._renderer.addClass(this._elementRef.nativeElement, `daff-${incomingSize}`);
                }

                this._size = incomingSize;
            }   
        }

        constructor(...args: any[]) {
            super(...args);
            this.size = defaultSize;
        }
    }
}