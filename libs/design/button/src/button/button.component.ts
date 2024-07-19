import { coerceBooleanProperty } from '@angular/cdk/coercion';
import {
  Component,
  OnInit,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  ElementRef,
  HostBinding,
  Renderer2,
  Input,
} from '@angular/core';

import {
  daffColorMixin,
  DaffColorable,
  DaffPrefixable,
  DaffSuffixable,
  daffPrefixableMixin,
  daffSuffixableMixin,
  DaffStatusable,
  daffStatusMixin,
  DaffArticleEncapsulatedDirective,
} from '@daffodil/design';

import { DaffButtonSizableDirective } from './button-sizable.directive';

/**
 * List of classes to add to DaffButtonComponent instances based on host attributes to style as different variants.
 */
const BUTTON_HOST_ATTRIBUTES: DaffButtonType[] = [
  'daff-button',
  'daff-stroked-button',
  'daff-raised-button',
  'daff-flat-button',
  'daff-icon-button',
  'daff-underline-button',
];

/**
 * An _elementRef and an instance of renderer2 are needed for the button mixins
 */
class DaffButtonBase{
  constructor(public _elementRef: ElementRef, public _renderer: Renderer2) {}
}

const _daffButtonBase = daffPrefixableMixin(daffSuffixableMixin(daffColorMixin(daffStatusMixin((DaffButtonBase)))));

export type DaffButtonType = 'daff-button' | 'daff-stroked-button' | 'daff-raised-button' | 'daff-flat-button' | 'daff-icon-button' | 'daff-underline-button' | undefined;

enum DaffButtonTypeEnum {
  Default = 'daff-button',
  Stroked = 'daff-stroked-button',
  Raised = 'daff-raised-button',
  Flat = 'daff-flat-button',
  Icon = 'daff-icon-button',
  Underline = 'daff-underline-button'
}

/**
 * @inheritdoc
 */
@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: '' +
    'button[daff-button]' + ',' +
    'button[daff-stroked-button]' + ',' +
    'button[daff-raised-button]' + ',' +
    'button[daff-flat-button]' + ',' +
    'button[daff-icon-button]' + ',' +
    'button[daff-underline-button]' + ',' +
    'a[daff-button]' + ',' +
    'a[daff-stroked-button]' + ',' +
    'a[daff-raised-button]' + ',' +
    'a[daff-flat-button]' + ',' +
    'a[daff-icon-button]' + ',' +
    'a[daff-underline-button]',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  //todo(damienwebdev): remove once decorators hit stage 3 - https://github.com/microsoft/TypeScript/issues/7342
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['color', 'status'],
  hostDirectives: [
    { directive: DaffArticleEncapsulatedDirective },
    {
      directive: DaffButtonSizableDirective,
      inputs: ['size'],
    },
  ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DaffButtonComponent
  extends _daffButtonBase
  implements OnInit, DaffPrefixable, DaffSuffixable, DaffColorable, DaffStatusable {

  private buttonType: DaffButtonType;

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2,
    private size: DaffButtonSizableDirective,
  ) {
    super(elementRef, renderer);

    for (const attr of BUTTON_HOST_ATTRIBUTES) {
      if (this._hasHostAttributes(attr)) {
        (<HTMLElement>elementRef.nativeElement).classList.add(attr);
      }
    }

    /**
     * Sets the default size of a button to medium.
     */
    this.size.defaultSize = 'md';
  }

  /**
   * @docs-private
   */
  ngOnInit() {
    for (const attr of BUTTON_HOST_ATTRIBUTES) {
      if (this._hasHostAttributes(attr)) {
        this.buttonType = attr;
      }
    }
  }

  /**
   * @docs-private
   */
  @HostBinding('class.daff-button') get button() {
    return this.buttonType === DaffButtonTypeEnum.Default || this.buttonType === undefined;
  }

  /**
   * @docs-private
   */
  @HostBinding('class.daff-stroked-button') get stroked() {
    return this.buttonType === DaffButtonTypeEnum.Stroked;
  }

  /**
   * @docs-private
   */
  @HostBinding('class.daff-raised-button') get raised() {
    return this.buttonType === DaffButtonTypeEnum.Raised;
  }

  /**
   * @docs-private
   */
  @HostBinding('class.daff-flat-button') get flat() {
    return this.buttonType === DaffButtonTypeEnum.Flat;
  }

  /**
   * @docs-private
   */
  @HostBinding('class.daff-icon-button') get icon() {
    return this.buttonType === DaffButtonTypeEnum.Icon;
  }

  /**
   * @docs-private
   */
  @HostBinding('class.daff-underline-button') get underline() {
    return this.buttonType === DaffButtonTypeEnum.Underline;
  }

  @HostBinding('class.daff-button--disabled') get disabledClass() {
	  return this.disabled;
  }

  @Input() loading = false;
  @Input() tabindex = 0;

  _disabled = false;

  /**
   * The disabled state of the button.
   */
  @Input() get disabled() {
	  return this._disabled || this.loading;
  }
  set disabled(value: any) {
	  this._disabled = coerceBooleanProperty(value);
  }

  @HostBinding('attr.disabled') get disabledAttribute() {
	  return this.disabled ? true : null;
  }

  @HostBinding('attr.aria-disabled') get ariaDisabled() {
	  return this.disabled ? true : null;
  }

  @HostBinding('attr.tabindex') get disabledTabIndex() {
	  return this.disabled ? -1 : this.tabindex;
  }

  private _getHostElement() {
    return this.elementRef.nativeElement;
  }

  /**
   * Gets whether the button has one of the given attributes.
   * */
  private _hasHostAttributes(...attributes: string[]) {
    return attributes.some(attribute => this._getHostElement().hasAttribute(attribute));
  }
}
