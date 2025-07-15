import {
  Component,
  ChangeDetectionStrategy,
  HostBinding,
  ContentChild,
  ElementRef,
  Input,
} from '@angular/core';

import {
  DaffPrefixDirective,
  DaffSuffixDirective,
} from '@daffodil/design';

/* eslint-disable quote-props */
@Component({
  selector:
    'daff-list-item' + ',' +
    'a[daff-list-item]',
  templateUrl: './list-item.component.html',
  host: {
    'class': 'daff-list-item',
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
  /**
   * @docs-private
   */
  @ContentChild(DaffSuffixDirective) _suffix: DaffSuffixDirective;

  constructor(private elementRef: ElementRef) {}

  /**
   * Sets the role for a regular `<daff-list-item>` to listitem and an `a[daff-list-item]` to navigation.
   *
   * @docs-private
   */
  @HostBinding('attr.role') get role() {
    return this._isAnchor ? 'navigation' : 'listitem';
  };

  private get _isAnchor() {
    return this.elementRef.nativeElement.nodeName.toLowerCase() === 'a';
  }
}
