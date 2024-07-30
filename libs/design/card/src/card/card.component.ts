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
  DaffColorableDirective,
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
  hostDirectives: [
    { directive: DaffArticleEncapsulatedDirective },
    {
      directive: DaffColorableDirective,
      inputs: ['color'],
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class DaffCardComponent implements OnInit {
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
