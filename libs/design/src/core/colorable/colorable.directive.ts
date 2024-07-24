import {
  Directive,
  HostBinding,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

import {
  DaffColorable,
  DaffPalette,
  DaffPaletteEnum,
} from './colorable';

const colorInPalette = (color: string) => (<any>Object).values(DaffPaletteEnum).includes(color);

const validateColor = (color: string) => {
  if (color !== undefined && !colorInPalette(color)) {
    console.warn(color + ' is not a valid color in DaffPalette');
  }
};

/**
 * The `DaffColorableDirective` allows a component to conditionally apply color-specific
 * styles by setting CSS classes based on the specified color. This directive is useful
 * for applying different color palettes to a component in an Angular application.
 *
 * ## Usage
 *
 * ## Example
 *
 * ```html
 * <div daffColorable [color]="componentColor">Colored content</div>
 * ```
 *
 * ## Styles
 *
 * The directive applies the following CSS classes based on the color:
 *
 * - `daff-primary`: Applied when the color is `primary`.
 * - `daff-secondary`: Applied when the color is `secondary`.
 * - `daff-tertiary`: Applied when the color is `tertiary`.
 * - `daff-black`: Applied when the color is `black`.
 * - `daff-white`: Applied when the color is `white`.
 * - `daff-theme`: Applied when the color is `theme`.
 * - `daff-theme-contrast`: Applied when the color is `theme-contrast`.
 */
@Directive({
  selector: '[daffColorable]',
  standalone: true,
})
export class DaffColorableDirective implements DaffColorable, OnChanges, OnInit {

  /**
   * Dynamically sets the CSS classes based on the color.
   * @docs-private
   */
  @HostBinding('class') get class() {
    return {
      'daff-primary': this.color === DaffPaletteEnum.Primary,
      'daff-secondary': this.color === DaffPaletteEnum.Secondary,
      'daff-tertiary': this.color === DaffPaletteEnum.Tertiary,
      'daff-black': this.color === DaffPaletteEnum.Black,
      'daff-white': this.color === DaffPaletteEnum.White,
      'daff-theme': this.color === DaffPaletteEnum.Theme,
      'daff-theme-contrast': this.color === DaffPaletteEnum.ThemeContrast,
    };
  }

  /**
   * Sets the color on a component.
   */
  @Input() color: DaffPalette;

  /**
   * Sets a default color.
   */
  defaultColor: DaffPalette;

  ngOnChanges(changes: SimpleChanges) {
    if (!changes.color.currentValue) {
      this.color = this.defaultColor;
    }
  }

  ngOnInit() {
    validateColor(this.color);
    if (!this.color) {
      this.color = this.defaultColor;
    }
  }
}

