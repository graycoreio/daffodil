import { NgIf } from '@angular/common';
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
  DaffPrefixSuffixModule,
  DaffSuffixDirective,
} from '@daffodil/design';

@Component({
  selector:
    'daff-list-item' + ',' +
    'a[daff-list-item]',
  templateUrl: './list-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    NgIf,
    DaffPrefixSuffixModule,
  ],
})

export class DaffListItemComponent {

  /**
   * @docs-private
   */
  @HostBinding('class.daff-list-item') class = true;

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
   * Sets the role for a regular `<daff-list-item>` to listitem.
   *
   * @docs-private
   */
  @HostBinding('attr.role') get role() {
    return this._isAnchor() ? null : 'listitem';
  };

  private _getHostElement() {
    return this.elementRef.nativeElement;
  }

  /** Gets whether a list item has one of the given attributes. */
  private _isAnchor() {
    return this.elementRef.nativeElement.localName === 'a';
  }
}
