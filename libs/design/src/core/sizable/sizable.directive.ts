import {
  Directive,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

import { DaffSizeAllType } from './sizable';

/**
 * `DaffSizableDirective` enforces consistent use of sizes across components.
 */
@Directive({
  selector: '[daffSizable]',
  host: {
    '[class.daff-xs]': 'size === "xs"',
    '[class.daff-sm]': 'size === "sm"',
    '[class.daff-md]': 'size === "md"',
    '[class.daff-lg]': 'size === "lg"',
    '[class.daff-xl]': 'size === "xl"',
  },
})
export class DaffSizableDirective<T extends DaffSizeAllType> implements OnChanges, OnInit {
  /**
   * The size of the component.
   */
  @Input() size: T;

  /**
   * Sets a default size.
   */
  public defaultSize: T;

  /**
   * @docs-private
   */
  ngOnChanges(changes: SimpleChanges) {
    if(!changes.size?.currentValue) {
      this.size = this.defaultSize;
    }
  }

  /**
   * @docs-private
   */
  ngOnInit() {
    if(!this.size) {
      this.size = this.defaultSize;
    }
  }
}

