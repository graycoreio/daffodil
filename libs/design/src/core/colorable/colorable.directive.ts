import {
  Directive,
  Input,
  isDevMode,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

import {
  DaffColor,
  DaffColorEnum,
} from './colorable';

const isDaffColor = (color: string) => (<any>Object).values(DaffColorEnum).includes(color);

const validateColor = (color: string) => {
  if(isDevMode()) {
    if(color !== undefined && !isDaffColor(color)) {
      console.warn(color + ' is not a valid color in DaffColor');
    }
  }
};

/**
 * Enforces consistent use of {@link DaffColor} on a component by applying
 * color-specific CSS classes and validating the color in dev mode.
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
export class DaffColorableDirective implements OnChanges, OnInit {
  /**
   * The color of the component.
   */
  @Input() color: DaffColor;

  /**
   * The default color used when no color is set.
   */
  defaultColor: DaffColor;

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

