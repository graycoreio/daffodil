import {
  Directive,
  Input,
  isDevMode,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

import {
  DaffTextAlignable,
  DaffTextAlignment,
  DaffTextAlignmentEnum,
} from './text-alignable';

const textAlignmentValues = (textAlignment: string) => (<any>Object).values(DaffTextAlignmentEnum).includes(textAlignment);

const validateTextAlignment = (textAlignment: string) => {
  if(isDevMode()) {
    if(textAlignment !== undefined && !textAlignmentValues(textAlignment)) {
      console.warn(`'${textAlignment}' is not a valid value of the textAlignment property. The available values are: left, center, or right.`);
    }
  }
};

/**
 * `DaffTextAlignableDirective` enforces consistent use of text alignment across components.
 */
@Directive({
  selector: '[daffTextAlignable]',
  host: {
    '[class.daff-left]': 'textAlignment === "left"',
    '[class.daff-center]': 'textAlignment === "center"',
    '[class.daff-right]': 'textAlignment === "right"',
  },
})
export class DaffTextAlignableDirective implements DaffTextAlignable, OnChanges, OnInit {

  /**
   * The text alignment of the component.
   */
  @Input() textAlignment: DaffTextAlignment;

  /**
   * The default used when no text alignment is set.
   */
  public defaultAlignment: DaffTextAlignment;

  /**
   * @docs-private
   */
  ngOnChanges(changes: SimpleChanges) {
    if (!changes.textAlignment?.currentValue) {
      this.textAlignment = this.defaultAlignment;
    }
  }

  /**
   * @docs-private
   */
  ngOnInit() {
    validateTextAlignment(this.textAlignment);

    if (!this.textAlignment) {
      this.textAlignment = this.defaultAlignment;
    }
  }
}

