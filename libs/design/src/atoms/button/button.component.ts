import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy, ElementRef, Input, HostBinding } from '@angular/core';

import { daffColorMixin, DaffColorable, DaffPalette } from '../../core/colorable/colorable';

/**
* List of classes to add to Daff Button instances based on host attributes to style as different variants.
*/
const BUTTON_HOST_ATTRIBUTES: DaffButtonType[] = [
  'daff-button',
  'daff-stroked-button',
  'daff-raised-button',
  'daff-icon-button'
];


/**
 * An _elementRef is needed for the Colorable mixin
 */
class DaffButtonBase{
  constructor(public _elementRef: ElementRef) {}
}

const _daffButtonBase = daffColorMixin(DaffButtonBase, 'theme-contrast') 

export type DaffButtonType = 'daff-button' | 'daff-stroked-button' | 'daff-raised-button' | 'daff-icon-button' | 'daff-underline-button' | undefined;
enum DaffButtonTypeEnum {
  Default = 'daff-button',
  Stroked = 'daff-stroked-button',
  Raised = 'daff-raised-button',
  Icon = 'daff-icon-button',
}

@Component({
  // tslint:disable-next-line: component-selector
  selector: '' +
    'button[daff-button]' + ',' +
    'button[daff-stroked-button]' + ',' +
    'button[daff-raised-button]' + ',' +
    'button[daff-icon-button]' + ',' +
    'a[daff-button]' + ',' +
    'a[daff-stroked-button]' + ',' +
    'a[daff-raised-button]' + ',' +
    'a[daff-icon-button]',
  template: '<ng-content></ng-content>',
  styleUrls: ['./button.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class DaffButtonComponent extends _daffButtonBase implements OnInit, DaffColorable {
    @Input() color: DaffPalette;
    buttonType: DaffButtonType;

    constructor(private elementRef: ElementRef) {
      super(elementRef);

      for (const attr of BUTTON_HOST_ATTRIBUTES) {
        if (this._hasHostAttributes(attr)) {
          (elementRef.nativeElement as HTMLElement).classList.add(attr);
        }
      }
    }

    ngOnInit() {
      for (const attr of BUTTON_HOST_ATTRIBUTES) {
        if (this._hasHostAttributes(attr)) {
          this.buttonType = attr;
        }
      }
    }

    @HostBinding('class.daff-button') get button() {
      return this.buttonType === DaffButtonTypeEnum.Default || this.buttonType === undefined;
    }
  
    @HostBinding('class.daff-stroked-button') get stroked() {
      return this.buttonType === DaffButtonTypeEnum.Stroked;
    }

    @HostBinding('class.daff-raised-button') get raised() {
      return this.buttonType === DaffButtonTypeEnum.Raised;
    }
  
    @HostBinding('class.daff-icon-button') get icon() {
      return this.buttonType === DaffButtonTypeEnum.Icon;
    }
    _getHostElement() {
      return this.elementRef.nativeElement;
    }
  
    /** Gets whether the button has one of the given attributes. */
    _hasHostAttributes(...attributes: string[]) {
      return attributes.some(attribute => this._getHostElement().hasAttribute(attribute));
    }
}
