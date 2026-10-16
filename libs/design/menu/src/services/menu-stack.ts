import {
  Inject,
  InjectionToken,
  Optional,
  Provider,
  SkipSelf,
} from '@angular/core';
import {
  debounceTime,
  distinctUntilChanged,
  Observable,
  startWith,
  Subject,
} from 'rxjs';

/**
 * @docs-private
 *
 * A menu that can be put on a {@link DaffMenuStack}.
 */
export interface DaffMenuStackItem {
  /**
   * The stack this menu belongs to.
   */
  menuStack?: DaffMenuStack;
}

/**
 * @docs-private
 *
 * Options for the {@link DaffMenuStack} close method.
 */
export interface DaffMenuStackCloseOptions {
  /**
   * Whether to move focus to the activator of each menu that closes.
   */
  focusParentTrigger?: boolean;
}

/**
 * @docs-private
 *
 * Emitted for each menu taken off a {@link DaffMenuStack}.
 */
export interface DaffMenuStackCloseEvent extends DaffMenuStackCloseOptions {
  /**
   * The menu being closed.
   */
  item: DaffMenuStackItem;
}

/**
 * @docs-private
 *
 * The menus that are currently open, innermost last.
 */
export class DaffMenuStack {
  private _elements: DaffMenuStackItem[] = [];
  private _close = new Subject<DaffMenuStackCloseEvent>();
  private _hasFocus = new Subject<boolean>();

  /**
   * Emits once for each menu taken off the stack, innermost first.
   */
  readonly closed: Observable<DaffMenuStackCloseEvent> = this._close;

  /**
   * Whether any of the open menus currently holds focus.
   */
  readonly hasFocus: Observable<boolean> = this._hasFocus.pipe(
    startWith(false),
    debounceTime(0),
    distinctUntilChanged(),
  );

  /**
   * Puts a menu on the stack.
   */
  push(menu: DaffMenuStackItem) {
    this._elements.push(menu);
  }

  /**
   * Closes the given menu and everything opened from it.
   */
  close(lastItem: DaffMenuStackItem, options?: DaffMenuStackCloseOptions) {
    if (this._elements.indexOf(lastItem) >= 0) {
      let popped: DaffMenuStackItem | undefined;

      do {
        popped = this._elements.pop();
        this._close.next({ item: popped, focusParentTrigger: options?.focusParentTrigger });
      } while (popped !== lastItem);
    }
  }

  /**
   * Closes everything opened from the given menu, leaving the menu itself open. Returns whether
   * anything closed.
   */
  closeSubMenuOf(lastItem: DaffMenuStackItem): boolean {
    let removed = false;

    if (this._elements.indexOf(lastItem) >= 0) {
      removed = this.peek() !== lastItem;

      while (this.peek() !== lastItem) {
        this._close.next({ item: this._elements.pop() });
      }
    }

    return removed;
  }

  /**
   * Closes every open menu.
   */
  closeAll(options?: DaffMenuStackCloseOptions) {
    while (!this.isEmpty()) {
      this._close.next({ item: this._elements.pop(), focusParentTrigger: options?.focusParentTrigger });
    }
  }

  /**
   * Whether no menu is open.
   */
  isEmpty(): boolean {
    return !this._elements.length;
  }

  /**
   * How many menus are open.
   */
  length(): number {
    return this._elements.length;
  }

  /**
   * The innermost open menu.
   */
  peek(): DaffMenuStackItem | undefined {
    return this._elements[this._elements.length - 1];
  }

  /**
   * Reports whether any of the open menus holds focus.
   */
  setHasFocus(hasFocus: boolean) {
    this._hasFocus.next(hasFocus);
  }
}

/**
 * @docs-private
 *
 * An injection token for the {@link DaffMenuStack} shared by a menu and its submenus.
 */
export const DAFF_MENU_STACK = new InjectionToken<DaffMenuStack>('DAFF_MENU_STACK');

/**
 * @docs-private
 *
 * Provides the stack of the menu that contains this activator, or a new stack when the activator
 * isn't inside a menu. Every menu opened from a root activator therefore shares one stack.
 */
export const DAFF_PARENT_OR_NEW_MENU_STACK_PROVIDER: Provider = {
  provide: DAFF_MENU_STACK,
  deps: [[new Optional(), new SkipSelf(), new Inject(DAFF_MENU_STACK)]],
  useFactory: (parentStack: DaffMenuStack | null) => parentStack || new DaffMenuStack(),
};
