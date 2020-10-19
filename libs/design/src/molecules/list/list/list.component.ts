import { Component, ViewEncapsulation, ChangeDetectionStrategy, Input, HostBinding, ElementRef } from '@angular/core';

/**
 * @deprecated
 * DaffListMode will be completely deprecated in v1.0.0
 * */
export type DaffListMode = 'multi-line' | 'link' | 'navigation' | undefined;
export enum DaffListModeEnum {
  Multiline = 'multi-line',
  Link = 'link',
  Navigation = 'navigation'
}

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
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class DaffListComponent {
  /**
   * @deprecated
   * */
  @Input() mode: DaffListMode;

	/**
	 * @docs-private
	 */
  @HostBinding('class.daff-list') get list() {
    return this.listType === DaffListTypeEnum.Default;
  }

  /**
	 * @docs-private
   * @deprecated
   * */
  @HostBinding('class.daff-list--multi-line') get multiline() {
    return this.mode === DaffListModeEnum.Multiline;
  }

  /**
	 * @docs-private
   * @deprecated
   * */
  @HostBinding('class.daff-list--link') get link() {
    return this.mode === DaffListModeEnum.Link;
  }

  /**
	 * @docs-private
   * @deprecated
   * */
  @HostBinding('class.daff-list--navigation') get navigation() {
    return this.mode === DaffListModeEnum.Navigation;
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
	 * @docs-private
   */
  @HostBinding('attr.role') get role() {
    return this.listType === DaffListTypeEnum.Nav ? 'navigation' : 'list';
  };

  private _getHostElement() {
    return this.elementRef.nativeElement;
  }
}
