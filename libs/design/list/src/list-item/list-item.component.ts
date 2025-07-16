import {
  Component,
  ChangeDetectionStrategy,
  ContentChild,
  ElementRef,
  Input,
} from '@angular/core';

import { DaffPrefixDirective } from '@daffodil/design';

/* eslint-disable quote-props */
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
    'class': 'daff-list-item',
    '[class.active]': 'active',
    '[attr.role]': 'this._isAnchor ? null : "listitem"',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class DaffListItemComponent {
  /** Whether an item in a `<daff-nav-list>` is the currently active item. */
  @Input() active = false;

  /**
   * @docs-private
   */
  @ContentChild(DaffPrefixDirective) _prefix: DaffPrefixDirective;

  constructor(private elementRef: ElementRef) {}

  private get _isAnchor() {
    return this.elementRef.nativeElement.nodeName.toLowerCase() === 'a';
  }
}
