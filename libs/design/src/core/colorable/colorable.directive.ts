import {
  Directive,
  HostBinding,
  Input,
  isDevMode,
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
  if(isDevMode()) {
    if(color !== undefined && !colorInPalette(color)) {
      console.warn(color + ' is not a valid color in DaffPalette');
    }
  }
};

/**
 * `DaffColorableDirective` allows a component to conditionally apply color-specific
 * styles by setting CSS classes based on the specified color. This directive is useful
 * for applying different color palettes to a component in an Angular application.
 *
 * Supported colors: `primary | secondary | tertiary | light | dark | theme | theme-contrast`
 *
 * | Color | Class |
 * | -------- | ----- |
 * | `primary` | `.daff-primary`|
 * | `secondary` | `.daff-secondary`|
 * | `tertiary` | `.daff-tertiary`|
 * | `light` | `daff-light` |
 * | `dark` | `daff-dark` |
 * | `theme` | `daff-theme`|
 * | `theme-contrast` | `.daff-theme-contrast`|
 *
 *  `white` and `black` have been deprecated in favor of `light` and `dark`.
 *
 * @example Implementing it as an attribute directive
 *
 * ```html
 * <div daffColorable [color]="primary">Colored content</div>
 * ```
 *
 *  ```scss
 * .div {
 *  &.daff-primary {
 *    color: daff-color($primary);
 *  }
 * }
 * ```
 *
 * In this example, the `daff-primary` class is applied to the `div` element, allowing you to
 * use the color class to style the `div`.
 *
 * @example Implementing it as an Angular host directive
 *
 * ```ts
 * @Component({
 *  selector: 'custom-component',
 *  template: 'custom-component.html',
 *  hostDirectives: [
 *    {
 *      directive: DaffColorableDirective,
 *      inputs: ['color'],
 *    },
 *  ],
 * })
 * export class CustomComponent {
 *  @HostBinding('class.custom-component') class = true;
 * }
 * ```
 *
 * ```scss
 * .custom-component {
 *  &.daff-primary {
 *    background: daff-color($primary, 10);
 *    color: daff-color($primary, 90);
 *  }
 * }
 * ```
 */
@Directive({
  selector: '[daffColorable]',
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
      'daff-light': this.color === DaffPaletteEnum.Light,
      'daff-dark': this.color === DaffPaletteEnum.Dark,
      'daff-theme': this.color === DaffPaletteEnum.Theme,
      'daff-theme-contrast': this.color === DaffPaletteEnum.ThemeContrast,
      'daff-black': this.color === DaffPaletteEnum.Black,
      'daff-white': this.color === DaffPaletteEnum.White,
    };
  }

  /**
   * Sets the color on a component.
   *
   * Default options are: `primary`, `secondary`, `tertiary`, `light`, `dark`, `theme`, and `theme-contrast`.
   */
  @Input() color: DaffPalette;

  /**
   * Sets a default color.
   */
  defaultColor: DaffPalette;

  /**
   * @docs-private
   */
  ngOnChanges(changes: SimpleChanges) {
    if (!changes.color.currentValue) {
      this.color = this.defaultColor;
    }
  }

  /**
   * @docs-private
   */
  ngOnInit() {
    validateColor(this.color);
    if (!this.color) {
      this.color = this.defaultColor;
    }
  }
}

