import {
  ChangeDetectionStrategy,
  Component,
  computed,
  contentChildren,
  ElementRef,
  forwardRef,
  input,
  model,
  Optional,
  Self,
  ViewEncapsulation,
} from '@angular/core';
import {
  ControlValueAccessor,
  NgControl,
} from '@angular/forms';

import {
  DaffDisableableDirective,
  DaffSizableDirective,
  DaffSizeLargeType,
  DaffSizeMediumType,
  DaffSizeSmallType,
} from '@daffodil/design';

import {
  DAFF_SWATCH_GROUP,
  DaffSwatchGroup,
} from './swatch-group.token';
import { DaffSwatchComponent } from '../swatch/swatch.component';

export type DaffSwatchSize = DaffSizeSmallType | DaffSizeMediumType | DaffSizeLargeType;

export type DaffSwatchShape = 'round' | 'square';

/**
 * A swatch group groups swatches so that users can select one of them.
 * It works with Angular forms through `formControl`, `formControlName`, and `ngModel`.
 *
 * ```html
 * <daff-swatch-group aria-label="Color" [formControl]="colorControl">
 *   <daff-swatch value="red" color="#ec0019" aria-label="Red"></daff-swatch>
 *   <daff-swatch value="blue" color="#1f66ff" aria-label="Blue"></daff-swatch>
 * </daff-swatch-group>
 * ```
 */
@Component({
  selector: 'daff-swatch-group',
  template: '<ng-content></ng-content>',
  styleUrl: './swatch-group.component.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  hostDirectives: [
    {
      directive: DaffSizableDirective,
      inputs: ['size'],
    },
    {
      directive: DaffDisableableDirective,
      inputs: ['disabled'],
    },
  ],
  host: {
    class: 'daff-swatch-group',
    role: 'radiogroup',
    '[class.daff-round]': 'shape() === "round"',
    '[class.daff-square]': 'shape() === "square"',
    '[attr.aria-disabled]': 'disabled() ? true : null',
    '(keydown)': '_onKeydown($event)',
    '(focusout)': '_onFocusout($event)',
  },
  providers: [
    { provide: DAFF_SWATCH_GROUP, useExisting: forwardRef(() => DaffSwatchGroupComponent) },
  ],
})
export class DaffSwatchGroupComponent<T = unknown> implements DaffSwatchGroup<T>, ControlValueAccessor {
  /**
   * The value of the selected swatch.
   */
  value = model<T>(null);

  /**
   * The shape of the swatches in the group.
   */
  shape = input<DaffSwatchShape>('round');

  /**
   * @docs-private
   */
  disabled = computed(() => this.disabledDirective.disabled());

  /**
   * @docs-private
   */
  _swatches = contentChildren<DaffSwatchComponent<T>>(DaffSwatchComponent, { descendants: true });

  private _enabledSwatches = computed(() => this._swatches().filter((swatch) => swatch._ready() && !swatch.isDisabled()));

  /**
   * The swatch that receives focus when tabbing into the group.
   * This is the selected swatch, or the first enabled swatch when nothing is selected.
   */
  private _tabbableSwatch = computed(() => {
    const enabled = this._enabledSwatches();
    return enabled.find((swatch) => swatch.currentValue() === this.value()) ?? enabled[0];
  });

  constructor(
    private elementRef: ElementRef<HTMLElement>,
    private disabledDirective: DaffDisableableDirective,
    sizable: DaffSizableDirective<DaffSwatchSize>,
    @Optional() @Self() public ngControl: NgControl,
  ) {
    sizable.defaultSize = 'md';

    if (this.ngControl != null) {
      this.ngControl.valueAccessor = this;
    }
  }

  /**
   * @docs-private
   */
  isTabbable(value: T): boolean {
    return this._tabbableSwatch()?.currentValue() === value;
  }

  /**
   * Selects the swatch with the given value.
   */
  select(value: T) {
    if (this.disabled() || this.value() === value) {
      return;
    }

    this.value.set(value);
    this._onChange(value);
  }

  private _onChange: (value: T) => void = () => {};
  private _onTouched: () => void = () => {};

  /**
   * @docs-private
   */
  writeValue(value: T): void {
    this.value.set(value);
  }

  /**
   * @docs-private
   */
  registerOnChange(fn: (value: T) => void): void {
    this._onChange = fn;
  }

  /**
   * @docs-private
   */
  registerOnTouched(fn: () => void): void {
    this._onTouched = fn;
  }

  /**
   * @docs-private
   */
  setDisabledState(isDisabled: boolean): void {
    this.disabledDirective.disabled.set(isDisabled);
  }

  /**
   * @docs-private
   *
   * Moves focus and selection between enabled swatches, wrapping around at either end.
   */
  _onKeydown(event: KeyboardEvent) {
    const enabled = this._enabledSwatches();
    const index = enabled.findIndex((swatch) => swatch.contains(<Node>event.target));

    if (index < 0) {
      return;
    }

    let next: number;

    switch (event.key) {
      case 'ArrowRight':
      case 'ArrowDown':
        next = (index + 1) % enabled.length;
        break;

      case 'ArrowLeft':
      case 'ArrowUp':
        next = (index - 1 + enabled.length) % enabled.length;
        break;

      case 'Home':
        next = 0;
        break;

      case 'End':
        next = enabled.length - 1;
        break;

      default:
        return;
    }

    event.preventDefault();
    this.select(enabled[next].currentValue());
    enabled[next].focus();
  }

  /**
   * @docs-private
   *
   * Marks the control as touched once focus leaves the group.
   */
  _onFocusout(event: FocusEvent) {
    if (!this.elementRef.nativeElement.contains(<Node>event.relatedTarget)) {
      this._onTouched();
    }
  }
}
