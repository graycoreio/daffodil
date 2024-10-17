import { DaffSelectAnimationState } from './state.enum';

/**
 * Turns a boolean into a string of 'open' or 'close'.
 *
 * @param open A boolean representing the open status of an select.
 */
export const getAnimationState = (open: boolean): DaffSelectAnimationState => {
  if (open) {
    return DaffSelectAnimationState.OPEN;
  } else {
    return DaffSelectAnimationState.CLOSED;
  }
};
