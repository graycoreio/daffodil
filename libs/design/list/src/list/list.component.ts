import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  HostBinding,
  ElementRef,
  Renderer2,
} from '@angular/core';

import { daffArticleEncapsulatedMixin } from '@daffodil/design';

export type DaffListType = 'daff-list' | 'daff-nav-list';

enum DaffListTypeEnum {
  Default = 'daff-list',
  Nav = 'daff-nav-list'
}

/**
 * An _elementRef and an instance of renderer2 are needed for the list mixins
 */
class DaffListBase {
  constructor(public _elementRef: ElementRef, public _renderer: Renderer2) {}
}

const _daffListBase = daffArticleEncapsulatedMixin((DaffListBase));

@Component({
  selector:
    'daff-list' + ',' +
    'daff-nav-list',
  template: '<ng-content></ng-content>',
  styleUrls: ['./list.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class DaffListComponent extends _daffListBase {
  /**
   * @docs-private
   */
  @HostBinding('class.daff-list') get list() {
    return this.listType === DaffListTypeEnum.Default;
  }

  /**
   * @docs-private
   */
  get listType(): DaffListType {
    return this._getHostElement().localName;
  }

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    super(elementRef, renderer);
  }

  /**
   * @docs-private
   */
  @HostBinding('class.daff-nav-list') get nav() {
    return this.listType === DaffListTypeEnum.Nav;
  }

  /**
   * Sets the role for a `<daff-nav-list>` to navigation.
   *
   * @docs-private
   */
  @HostBinding('attr.role') get role() {
    return this.listType === DaffListTypeEnum.Nav ? 'navigation' : 'list';
  };

  private _getHostElement() {
    return this.elementRef.nativeElement;
  }
}
