import {
  InjectionToken,
  Signal,
} from '@angular/core';

/**
 * The public shape of a swatch group, exposed to its descendant swatches.
 */
export interface DaffSwatchGroup<T = unknown> {
  /**
   * The value of the currently selected swatch.
   */
  readonly value: Signal<T>;

  /**
   * Whether the whole group is disabled.
   */
  readonly disabled: Signal<boolean>;

  /**
   * Whether the swatch with the given value should be reachable with the `Tab` key.
   */
  isTabbable(value: T): boolean;

  /**
   * Selects the swatch with the given value.
   */
  select(value: T): void;
}

/**
 * Allows swatches to inject their parent swatch group without
 * creating a circular import with the swatch group component.
 */
export const DAFF_SWATCH_GROUP = new InjectionToken<DaffSwatchGroup>('DaffSwatchGroup');
