import {
  fakeAsync,
  tick,
} from '@angular/core/testing';

import {
  DaffMenuStack,
  DaffMenuStackCloseEvent,
  DaffMenuStackItem,
} from './menu-stack';

describe('@daffodil/design/menu | DaffMenuStack', () => {
  let stack: DaffMenuStack;
  let root: DaffMenuStackItem;
  let child: DaffMenuStackItem;
  let grandchild: DaffMenuStackItem;
  let events: DaffMenuStackCloseEvent[];

  const closedItems = () => events.map(({ item }) => item);

  beforeEach(() => {
    stack = new DaffMenuStack();
    root = {};
    child = {};
    grandchild = {};
    events = [];

    stack.closed.subscribe((event) => events.push(event));
  });

  it('should start out empty', () => {
    expect(stack.isEmpty()).toBe(true);
    expect(stack.length()).toBe(0);
  });

  describe('with a root menu, a submenu, and a submenu of that', () => {
    beforeEach(() => {
      stack.push(root);
      stack.push(child);
      stack.push(grandchild);
    });

    it('should report the innermost menu', () => {
      expect(stack.peek()).toBe(grandchild);
      expect(stack.length()).toBe(3);
    });

    it('should close a menu along with everything opened from it, innermost first', () => {
      stack.close(child);

      expect(closedItems()).toEqual([grandchild, child]);
      expect(stack.peek()).toBe(root);
    });

    it('should leave a menu it was never given open', () => {
      stack.close({});

      expect(closedItems()).toEqual([]);
      expect(stack.length()).toBe(3);
    });

    it('should close the submenus of a menu without closing the menu itself', () => {
      stack.closeSubMenuOf(child);

      expect(closedItems()).toEqual([grandchild]);
      expect(stack.peek()).toBe(child);
    });

    it('should report whether closing submenus actually closed anything', () => {
      expect(stack.closeSubMenuOf(grandchild)).toBe(false);
      expect(stack.closeSubMenuOf(root)).toBe(true);
    });

    it('should close every menu', () => {
      stack.closeAll();

      expect(closedItems()).toEqual([grandchild, child, root]);
      expect(stack.isEmpty()).toBe(true);
    });

    it('should pass on that focus should return to each closed menu\'s activator', () => {
      stack.close(child, { focusParentTrigger: true });

      expect(events.every(({ focusParentTrigger }) => focusParentTrigger)).toBe(true);
    });

    it('should not ask for focus when a submenu is only being replaced', () => {
      stack.closeSubMenuOf(child);

      expect(events.every(({ focusParentTrigger }) => !focusParentTrigger)).toBe(true);
    });
  });

  describe('focus', () => {
    let reported: boolean[];

    // Subscribed inside each test so the debounce runs on the fake timers.
    const watchFocus = () => {
      reported = [];
      stack.hasFocus.subscribe((hasFocus) => reported.push(hasFocus));
    };

    it('should start out unfocused', fakeAsync(() => {
      watchFocus();
      tick();

      expect(reported).toEqual([false]);
    }));

    it('should collapse focus moving from one menu to another into staying focused', fakeAsync(() => {
      watchFocus();
      stack.setHasFocus(true);
      tick();
      // Leaving one open menu for another reports a leave and an enter back to back.
      stack.setHasFocus(false);
      stack.setHasFocus(true);
      tick();

      expect(reported).toEqual([true]);
    }));

    it('should report focus leaving the open menus', fakeAsync(() => {
      watchFocus();
      stack.setHasFocus(true);
      tick();
      stack.setHasFocus(false);
      tick();

      expect(reported).toEqual([true, false]);
    }));
  });
});
