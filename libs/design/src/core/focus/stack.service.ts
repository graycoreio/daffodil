import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class DaffFocusStackService {
  _stack: HTMLElement[] = [];

  /**
   * @description
   * Adds a HTML element to a focus stack.
   * This method should be called to manage focus history. It should be
   * called before focus is moved to the next element.
   *
   * ```ts
   * this._focusStack.push(this._doc.activeElement);
   * ```
   */
  push(el: HTMLElement) {
    this._stack.push(el);
  }

  /**
   * @description
   * Focuses on the HTML element at the top of a stack.
   */
  focus() {
    this._stack.slice(-1)[0].focus();
  }

  /**
   * @description
   * Removes the HMTL element at the top of a stack and focuses on it.
   */
  pop() {
    let el = this._stack.pop();
    while(el === undefined && this._stack.length > 0) {
      el = this._stack.pop();
    }

    if(el) {
      el.focus();
      return;
    }

    (<HTMLElement>document.activeElement).blur();
  }
}
