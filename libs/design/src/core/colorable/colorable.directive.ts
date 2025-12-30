import {
  Directive,
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
  host: {
    '[class.daff-primary]': 'color === "primary"',
    '[class.daff-secondary]': 'color === "secondary"',
    '[class.daff-tertiary]': 'color === "tertiary"',
    '[class.daff-light]': 'color === "light"',
    '[class.daff-dark]': 'color === "dark"',
    '[class.daff-theme]': 'color === "theme"',
    '[class.daff-theme-contrast]': 'color === "theme-contrast"',
    '[class.daff-black]': 'color === "black"',
    '[class.daff-white]': 'color === "white"',
  },
})
export class DaffColorableDirective implements DaffColorable, OnChanges, OnInit {
  /**
   * Sets the color on a component.
   */
  @Input() color: DaffPalette;

  /**
   * Sets a default color.
   *
   * @example
   * ```ts
   * constructor(private colorableDirective: DaffColorableDirective) {
   *  this.colorableDirective.defaultColor = 'theme';
   * }
   * ```
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

