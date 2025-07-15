import {
  Component,
  ChangeDetectionStrategy,
  HostBinding,
  ContentChild,
  ElementRef,
  Input,
} from '@angular/core';

import { DaffPrefixDirective } from '@daffodil/design';

/* eslint-disable quote-props */
@Component({
  selector:
    'daff-list-item' + ',' +
    'a[daff-list-item]',
  templateUrl: './list-item.component.html',
  host: {
    'class': 'daff-list-item',
    '[class.active]': 'active',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class DaffListItemComponent {
  /** Whether or not the header item is active */
  @Input() @HostBinding('class.active') active = false;

  /**
   * @docs-private
   */
  @ContentChild(DaffPrefixDirective) _prefix: DaffPrefixDirective;

  constructor(private elementRef: ElementRef) {}

  /**
   * Sets the role for a regular `<daff-list-item>` to listitem and an `a[daff-list-item]` to navigation.
   *
   * @docs-private
   */
  @HostBinding('attr.role') get role() {
    return this._isAnchor ? null : 'listitem';
  };

  private get _isAnchor() {
    return this.elementRef.nativeElement.nodeName.toLowerCase() === 'a';
  }
}
