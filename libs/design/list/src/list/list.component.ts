import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  HostBinding,
  ElementRef,
} from '@angular/core';

import { DaffArticleEncapsulatedDirective } from '@daffodil/design';

export type DaffListType = 'daff-list' | 'daff-nav-list';

enum DaffListTypeEnum {
  Default = 'daff-list',
  Nav = 'daff-nav-list'
}

@Component({
  selector:
    'daff-list' + ',' +
    'daff-nav-list',
  template: '<ng-content></ng-content>',
  styleUrls: ['./list.component.scss'],
  hostDirectives: [{
    directive: DaffArticleEncapsulatedDirective,
  }],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})

export class DaffListComponent {
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

  constructor(private elementRef: ElementRef) {}

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
