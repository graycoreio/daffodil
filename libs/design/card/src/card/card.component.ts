import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  HostBinding,
  ElementRef,
  Renderer2,
  Input,
  OnInit,
} from '@angular/core';

import {
  DaffArticleEncapsulatedDirective,
  DaffColorable,
  daffColorMixin,
} from '@daffodil/design';

export type DaffCardType = null | 'daff-raised-card' | 'daff-stroked-card';

enum DaffCardTypeEnum {
  Raised = 'daff-raised-card',
  Stroked = 'daff-stroked-card'
}

/**
 * This attribute determines what orientation the the card contents are stacked.
 */
export type DaffCardOrientation = 'vertical' | 'horizontal';
export enum DaffCardOrientationEnum {
  Vertical = 'vertical',
  Horizontal = 'horizontal',
}

/**
 * An _elementRef and an instance of renderer2 are needed for the Colorable mixin
 */
class DaffCardBase {
  constructor(public _elementRef: ElementRef, public _renderer: Renderer2) {}
}

const _daffCardBase = daffColorMixin(DaffCardBase);

/**
 * @inheritdoc
 */
@Component({
  selector:
    'daff-card' + ',' +
    'daff-raised-card' + ',' +
    'daff-stroked-card' + ',' +
    'a[daff-card]' + ',' +
    'a[daff-raised-card]' + ',' +
    'a[daff-stroked-card]',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  //todo(damienwebdev): remove once decorators hit stage 3 - https://github.com/microsoft/TypeScript/issues/7342
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['color'],
  hostDirectives: [{
    directive: DaffArticleEncapsulatedDirective,
  }],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class DaffCardComponent extends _daffCardBase implements OnInit, DaffColorable {
  private _orientation: DaffCardOrientation = DaffCardOrientationEnum.Vertical;

  @Input()
  get orientation() {
    return this._orientation;
  }

  set orientation(value: DaffCardOrientation) {
    if(value === null || value === undefined || <unknown>value === '') {
      this._orientation = DaffCardOrientationEnum.Vertical;
    } else {
      this._orientation = value;
    }
  };

  /**
   * @docs-private
   */
  private cardType: DaffCardType;

  private initCardType(): DaffCardType {
    const values = Object.keys(DaffCardTypeEnum).map((k) => DaffCardTypeEnum[k]);

    if (values.indexOf(this._getHostElement().localName) >= 0) {
      return this._getHostElement().localName;
    }

    for (const attr of values) {
      if (this._hasHostAttributes(attr)) {
        return <DaffCardType>attr;
      }
    }

    return null;
  }

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    super(elementRef, renderer);

    this.cardType = this.initCardType();
  }

  /**
   * @docs-private
   */
  ngOnInit() {
    if (this.cardType) {
      (<HTMLElement>this.elementRef.nativeElement).classList.add(this.cardType);
    }
  }

  @HostBinding('class.daff-card') class = true;

  /**
   * @docs-private
   */
  @HostBinding('class.daff-card--vertical') get verticalClass() {
    return this.orientation === DaffCardOrientationEnum.Vertical;
  }

  /**
   * @docs-private
   */
  @HostBinding('class.daff-card--horizontal') get horizontalClass() {
    return this.orientation === DaffCardOrientationEnum.Horizontal;
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
