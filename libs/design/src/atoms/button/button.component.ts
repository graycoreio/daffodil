import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy, ElementRef, Input } from '@angular/core';

import { daffColorMixin, DaffColorable, DaffPalette } from '../../core/colorable/colorable';

/**
* List of classes to add to Daff Button instances based on host attributes to style as different variants.
*/
const BUTTON_HOST_ATTRIBUTES = [
  'daff-button',
  'daff-clear-button',
  'daff-stroked-button',
  'daff-icon-button'
];

/**
 * An _elementRef is needed for the Colorable mixin
 */
export class DaffButtonBase{
  constructor(public _elementRef: ElementRef) {}
}

const _daffButtonBase = daffColorMixin(DaffButtonBase) 

@Component({
  selector: '' +
    'button[daff-button]' + ',' +
    'button[daff-clear-button]' + ',' +
    'button[daff-stroked-button]' + ',' +
    'button[daff-icon-button]' + ',' +
    'a[daff-button]' + ',' +
    'a[daff-clear-button]' + ',' +
    'a[daff-stroked-button]' + ',' +
    'a[daff-icon-button]',
  template: '<ng-content></ng-content>',
  styleUrls: ['./button.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class DaffButtonComponent extends _daffButtonBase implements OnInit, DaffColorable {
    @Input() color: DaffPalette;

    ngOnInit() {}

    constructor(private elementRef: ElementRef) {
      super(elementRef);

      for (const attr of BUTTON_HOST_ATTRIBUTES) {
        if (this._hasHostAttributes(attr)) {
          (elementRef.nativeElement as HTMLElement).classList.add(attr);
        }
      }
    }

    _getHostElement() {
      return this.elementRef.nativeElement;
    }
  
    /** Gets whether the button has one of the given attributes. */
    _hasHostAttributes(...attributes: string[]) {
      return attributes.some(attribute => this._getHostElement().hasAttribute(attribute));
    }
}
