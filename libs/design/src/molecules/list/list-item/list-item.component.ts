import { Component, ChangeDetectionStrategy, HostBinding, ContentChild, ElementRef } from '@angular/core';
import { DaffPrefixDirective, DaffSuffixDirective } from '../../../core/prefix-suffix/public_api';

@Component({
  selector:
    'daff-list-item' + ',' +
    'a[daff-list-item]',
  templateUrl: './list-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class DaffListItemComponent {

  @HostBinding('class.daff-list-item') class = true;

  @ContentChild(DaffPrefixDirective, { static: false }) _prefix: DaffPrefixDirective;
  @ContentChild(DaffSuffixDirective, { static: false }) _suffix: DaffSuffixDirective;

  constructor(private elementRef: ElementRef) {}

  /**
   * Sets the role for a regular `<daff-list-item>` to listitem.
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
