import { Component, ViewEncapsulation, ChangeDetectionStrategy, Input, HostBinding, ElementRef, Renderer2, OnInit } from '@angular/core';

export type DaffListMode = 'multi-line' | 'link' | 'navigation' | undefined;
export enum DaffListModeEnum {
  Multiline = 'multi-line',
  Link = 'link', // Link will be deprecated in v1.0.0
  Navigation = 'navigation'
}

/**
* List of classes to add to DaffListComponent instances based on host attributes to style as different variants.
*/
const LIST_HOST_ATTRIBUTES: DaffListType[] = [
  'daff-list',
  'daff-nav-list'
];

export type DaffListType = 'daff-list' | 'daff-nav-list' | undefined;

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

export class DaffListComponent implements OnInit {
  @Input() mode: DaffListMode;

  @HostBinding('class.daff-list') get list() {
    return this.listType === DaffListTypeEnum.Default || this.listType === undefined;
  }

  @HostBinding('class.daff-list--multi-line') get multiline() {
    return this.mode === DaffListModeEnum.Multiline;
  }

  // Link will be deprecated in v1.0.0
  @HostBinding('class.daff-list--link') get link() {
    return this.mode === DaffListModeEnum.Link;
  }

  @HostBinding('class.daff-list--navigation') get navigation() {
    return this.mode === DaffListModeEnum.Navigation;
  }
  
  listType: DaffListType;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    for (const attr of LIST_HOST_ATTRIBUTES) {
      if (this._hasHostAttributes(attr)) {
        this.listType = attr;
      }
    }
  }

  @HostBinding('class.daff-nav-list') get nav() {
    return this.listType === DaffListTypeEnum.Nav;
  }

  /**
   * Sets the role for a `<daff-nav-list>` to navigation.
   */
  @HostBinding('attr.role') get role() {
    return this.listType === DaffListTypeEnum.Nav ? 'navigation' : 'list';
  };

  _getHostElement() {
    return this.elementRef.nativeElement;
  }

  /** Gets whether a list has one of the given attributes. */
  _hasHostAttributes(...attributes: string[]) {
    return attributes.some(attribute => this._getHostElement().localName === attribute);
  }
}
