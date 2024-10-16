import { createSingleInjectionToken } from '@daffodil/core';

export const {
  /**
   * An injection token for setting how long (in ms) a cart item remains in a temporary state before
   * reverting back to a default state. These temporary states are set after mutating or adding a cart item.
   * Daffodil has a timer that resets the state of all cart items after this debounce time, but the timer will
   * reset if a new item addition or mutation occurs. The default is 4000.
   */
  token: DaffCartItemStateDebounceTime,
  /**
   * Provider function for {@link DaffCartItemStateDebounceTime}.
   */
  provider: provideDaffCartItemStateDebounceTime,
} = createSingleInjectionToken<number>('DaffCartItemStateDebounceTime');
