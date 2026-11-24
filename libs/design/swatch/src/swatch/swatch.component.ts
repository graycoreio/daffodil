import {
  booleanAttribute,
  ChangeDetectionStrategy,
  Component,
  computed,
  ElementRef,
  Inject,
  input,
  OnInit,
  Optional,
  signal,
  viewChild,
  ViewEncapsulation,
} from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faEyeDropper } from '@fortawesome/free-solid-svg-icons';

import { DaffDisableableDirective } from '@daffodil/design';

import {
  DAFF_SWATCH_GROUP,
  DaffSwatchGroup,
} from '../swatch-group/swatch-group.token';

/**
 * The color a picker swatch starts with before a color has been picked.
 */
const DAFF_SWATCH_PICKER_START_COLOR = '#efefef';

/**
 * A swatch is a single visual option, like a color or a pattern, inside of a `<daff-swatch-group>`.
 *
 * ```html
 * <daff-swatch-group aria-label="Color">
 *   <daff-swatch value="red" color="#ec0019" aria-label="Red"></daff-swatch>
 *   <daff-swatch picker aria-label="Custom color"></daff-swatch>
 * </daff-swatch-group>
 * ```
 */
@Component({
  selector: 'daff-swatch',
  templateUrl: './swatch.component.html',
  styleUrl: './swatch.component.scss',
  imports: [
    FaIconComponent,
  ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  hostDirectives: [
    {
      directive: DaffDisableableDirective,
      inputs: ['disabled'],
    },
  ],
  host: {
    class: 'daff-swatch',
    role: 'radio',
    '[class.daff-selected]': 'selected()',
    '[class.daff-disabled]': 'isDisabled()',
    '[class.daff-picker]': 'picker() && !label()',
    '[class.daff-text]': '!!label()',
    '[attr.aria-checked]': 'selected()',
    '[attr.aria-disabled]': 'isDisabled() ? true : null',
    '[attr.tabindex]': 'tabIndex()',
    '(click)': 'select($event)',
    '(keydown.space)': 'select($event)',
  },
})
export class DaffSwatchComponent<T = unknown> implements OnInit {
  /**
   * The value of the swatch. It's set as the swatch group's value when the swatch is selected. Each swatch in a group should have a unique value.
   *
   * Every swatch needs a value, except picker swatches, which ignore it and use the picked color instead.
   */
  value = input<T>();

  /**
   * A CSS color or background value used to fill the swatch.
   *
   * This has no effect on picker swatches, which are filled with the picked color.
   */
  color = input<string>();

  /**
   * Whether the swatch opens a color picker when it's selected.
   * The picked color becomes the value of the swatch.
   */
  picker = input(false, { transform: booleanAttribute });

  /**
   * Text displayed in the swatch, like a size. Text swatches are shaped to fit their text
   * and are labelled by it, so they don't need an `aria-label`.
   *
   * Text swatches don't display `color`, projected content, or a color picker.
   */
  label = input<string>();

  private _pickedColor = signal<T>(undefined);

  /**
   * @docs-private
   *
   * Whether the swatch's inputs have been set. The swatch group reads the values of all of its swatches,
   * and swatches created with `@for` can be found by the group before their inputs are available.
   */
  readonly _ready = signal(false);

  /**
   * The value the swatch currently represents.
   * For picker swatches, this is the picked color, or a light gray before a color has been picked.
   */
  currentValue = computed(() => this.picker() && !this.label()
    ? this._pickedColor() ?? <T>DAFF_SWATCH_PICKER_START_COLOR
    : this.value());

  /**
   * @docs-private
   */
  faEyeDropper = faEyeDropper;

  /**
   * @docs-private
   *
   * Whether the swatch is the currently selected swatch in its group.
   */
  selected = computed(() => this.swatchGroup.value() === this.currentValue());

  /**
   * @docs-private
   *
   * Whether the swatch is disabled, either on its own or because its group is disabled.
   */
  isDisabled = computed(() => this.disabledDirective.disabled() || this.swatchGroup.disabled());

  /**
   * @docs-private
   */
  tabIndex = computed(() => this.swatchGroup.isTabbable(this.currentValue()) ? 0 : -1);

  /**
   * @docs-private
   */
  _pickerInput = viewChild<ElementRef<HTMLInputElement>>('pickerInput');

  constructor(
    private elementRef: ElementRef<HTMLElement>,
    private disabledDirective: DaffDisableableDirective,
    @Optional() @Inject(DAFF_SWATCH_GROUP) private swatchGroup: DaffSwatchGroup<T>,
  ) {
    if (!this.swatchGroup) {
      throw new Error('DaffSwatchComponent needs to be used inside of a DaffSwatchGroupComponent.');
    }
  }

  /**
   * @docs-private
   */
  ngOnInit() {
    this._ready.set(true);
  }

  /**
   * @docs-private
   *
   * Selects the swatch and, for picker swatches, opens the color picker.
   */
  select(event?: Event) {
    // clicks forwarded to the hidden color input bubble up to the host
    if (event?.target === this._pickerInput()?.nativeElement) {
      return;
    }

    event?.preventDefault();

    if (this.isDisabled()) {
      return;
    }

    this.swatchGroup.select(this.currentValue());

    if (this.picker() && !this.label()) {
      this.openPicker();
    }
  }

  /**
   * Opens the color picker. Only applies to picker swatches.
   */
  openPicker() {
    const pickerInput = this._pickerInput()?.nativeElement;

    if (!pickerInput || this.isDisabled()) {
      return;
    }

    try {
      pickerInput.showPicker();
    } catch {
      pickerInput.click();
    }
  }

  /**
   * @docs-private
   */
  _onPick(event: Event) {
    const color = <T>(<HTMLInputElement>event.target).value;

    this._pickedColor.set(color);
    this.swatchGroup.select(color);
  }

  /**
   * Sets focus on the swatch.
   */
  focus() {
    this.elementRef.nativeElement.focus();
  }

  /**
   * @docs-private
   */
  contains(node: Node) {
    return this.elementRef.nativeElement.contains(node);
  }
}
