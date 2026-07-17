import {
  Component,
  ChangeDetectionStrategy,
  ElementRef,
  contentChild,
  input,
} from '@angular/core';

import { DaffPrefixDirective } from '@daffodil/design';

/**
 * Individual items within a list.
 *
 * @example
 * ```html
 * <daff-list-item>Standard list item</daff-list-item>
 * <a href="/" daff-list-item> Linked list item</a>
 * ```
 */
@Component({
  selector:
    'daff-list-item' + ',' +
    'a[daff-list-item]',
  templateUrl: './list-item.component.html',
  host: {
    class: 'daff-list-item',
    '[class.active]': 'active()',
    '[attr.role]': 'this._isAnchor ? null : "listitem"',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class DaffListItemComponent {
  /** Whether an item in a `<daff-nav-list>` is the currently active item. */
  active = input(false);

  /**
   * @docs-private
   */
  _prefix = contentChild(DaffPrefixDirective);

  constructor(private elementRef: ElementRef) {}

  /**
   * @docs-private
   */
  get _isAnchor() {
    return this.elementRef.nativeElement.nodeName.toLowerCase() === 'a';
  }
}
