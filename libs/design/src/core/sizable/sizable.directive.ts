import {
  Directive,
  HostBinding,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

import {
  DaffSizable,
  DaffSizableEnum,
  DaffSizeAllType,
} from './sizable';

/**
 * The `DaffSizableDirective` allows for dynamic sizing of a component by setting
 * CSS classes based on the specified size.
 *
 * ## Example
 *
 * ```html
 * <div daffSizable [size]="componentSize">Sized content</div>
 * ```
 */
@Directive({
  selector: '[daffSizable]',
  standalone: true,
})
export class DaffSizableDirective<T extends DaffSizeAllType> implements DaffSizable<T>, OnChanges, OnInit {

  /**
   * Dynamically sets the CSS classes based on the size.
   * @docs-private
   */
  @HostBinding('class') get class() {
    return {
      'daff-xs': this.size === DaffSizableEnum.XSmall,
      'daff-sm': this.size === DaffSizableEnum.Small,
      'daff-md': this.size === DaffSizableEnum.Medium,
      'daff-lg': this.size === DaffSizableEnum.Large,
      'daff-xl': this.size === DaffSizableEnum.XLarge,
    };
  }

  /**
   * The size of a component.
   */
  @Input() size: T;

  /**
   * Sets a default size when no size is provided.
   */
  public defaultSize: T;

  ngOnChanges(changes: SimpleChanges) {
    if(!changes.size?.currentValue) {
      this.size = this.defaultSize;
    }
  }

  ngOnInit() {
    if(!this.size) {
      this.size = this.defaultSize;
    }
  }
}

