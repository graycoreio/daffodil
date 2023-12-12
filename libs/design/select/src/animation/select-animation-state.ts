/**
 * Turns a boolean into a string of 'open' or 'close'.
 *
 * @param open A boolean representing the open status of an select.
 */
export const getAnimationState = (open: boolean) => {
  if (open) {
    return 'open';
  } else {
    return 'closed';
  }
};
