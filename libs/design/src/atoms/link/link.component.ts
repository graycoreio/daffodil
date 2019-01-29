import { Component, ViewEncapsulation, ChangeDetectionStrategy, ElementRef, Input, OnInit } from '@angular/core';
import { daffColorMixin, DaffPalette, DaffColorable } from '../../core/colorable/colorable';

/**
* List of classes to add to Daff Link instances based on host attributes to style as different variants.
*/
const LINK_HOST_ATTRIBUTES = [
  'daff-link'
];

/**
 * An _elementRef is needed for the Colorable mixin
 */
export class DaffLinkBase {
  constructor(public _elementRef: ElementRef) {}
}

const _daffLinkBase = daffColorMixin(DaffLinkBase, 'black')

@Component ({
  // tslint:disable-next-line: component-selector
  selector: 'a[daff-link]',
  template: '<ng-content></ng-content>',
  styleUrls: ['./link.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class DaffLinkComponent extends _daffLinkBase implements OnInit, DaffColorable {

  @Input() color: DaffPalette;
  
  ngOnInit() {}

  constructor(private elementRef: ElementRef) {
    super(elementRef);

    for (const attr of LINK_HOST_ATTRIBUTES) {
      if (this._hasHostAttributes(attr)) {
        (elementRef.nativeElement as HTMLElement).classList.add(attr);
      }
    }
  }

  _getHostElement() {
    return this.elementRef.nativeElement;
  }

  /** Gets whether the link has one of the given attributes. */
  _hasHostAttributes(...attributes: string[]) {
    return attributes.some(attribute => this._getHostElement().hasAttribute(attribute));
  }
}