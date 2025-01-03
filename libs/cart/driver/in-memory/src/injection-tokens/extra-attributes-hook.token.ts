import { RequestInfo } from 'angular-in-memory-web-api';

import { DaffCart } from '@daffodil/cart';
import { createSingleInjectionToken } from '@daffodil/core';

export type DaffCartInMemoryExtraAttributesHook = (reqInfo: RequestInfo, cart: DaffCart) => Record<string, any>;

export const {
  /**
   * Allows an app dev to generate extra fields in the in-memory backend.
   * This enables the in-memory drivers to return responses similar to what the
   * frontend would expect from the production platform.
   *
   * The value returned by the hook function will be set to the returned cart's `extra_attributes` field
   * for driver calls that return a cart.
   *
   * Note that this and any `extra_attributes` features are for advanced users
   * and should be used with care.
   *
   * @example Adding the `numberOfCartItems` field to `extra_attributes`
   * ```ts
   * (reqInfo: RequestInfo, cart: DaffCart) => ({
   *   numberOfCartItems: cart.items.length
   * })
   * ```
   */
  token: DAFF_CART_IN_MEMORY_EXTRA_ATTRIBUTES_HOOK,
  /**
   * Provider function for {@link DAFF_CART_IN_MEMORY_EXTRA_ATTRIBUTES_HOOK}.
   */
  provider: provideDaffCartInMemoryExtraAttributesHook,
} = createSingleInjectionToken<DaffCartInMemoryExtraAttributesHook>(
  'DAFF_CART_IN_MEMORY_EXTRA_ATTRIBUTES_HOOK',
  { factory: () => (reqInfo, cart) => ({}) },
);
