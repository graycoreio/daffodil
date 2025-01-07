import { DOCUMENT } from '@angular/common';
import {
  Inject,
  Injectable,
} from '@angular/core';

@Injectable({ providedIn: 'root' })
export class DaffFocusStackService {
  private _stack: HTMLElement[] = [];

  constructor(@Inject(DOCUMENT) private document: any) {

  }

  /**
   * Return the current length of the stack.
   */
  length(): number {
    return this._stack.length;
  }

  /**
   * Adds a HTML element to a focus stack and returns the new length of the stack.
   *
   * Generally, you will probably want to call this before you transition focus
   * onto a new element.
   *
   * @example Using the push function
   * ```ts
   * this._focusStack.push(this._doc.activeElement);
   * ```
   */
  push(el: HTMLElement | undefined = undefined): number {
    this._stack.push(el ?? this.document.activeElement);
    return this._stack.length;
  }

  /**
   * Focuses on the HTML element at the top of a stack.
   *
   * @example Using the focus function
   * ```ts
   * this._focusStack.focus(this._doc.activeElement);
   * ```
   */
  focus() {
    if(this._stack.length >= 1) {
      this._stack.slice(-1)[0].focus();
    } else {
      (<HTMLElement>this.document.activeElement).blur();
    }
  }

  /**
   * Removes the HMTL element at the top of a stack and focuses on it.
   */
  pop(focus: boolean = true): HTMLElement {
    let el = this._stack.pop();
    while(el === undefined && this._stack.length > 0) {
      el = this._stack.pop();
    }

    if(el) {
      if(focus) {
        el.focus();
      }
      return el;
    }

    (<HTMLElement>this.document.activeElement).blur();
    return this.document.activeElement;
  }
}
