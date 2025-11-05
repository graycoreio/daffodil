export type DaffModalVerticalPosition = 'top' | 'center';

export interface DaffModalPosition {
  /**
   * The vertical position of the modal. Can be 'top' or 'center'.
   */
  vertical?: DaffModalVerticalPosition;

  /**
   * Optional offset from the top edge. Defaults to `10rem`.
   */
  offsetTop?: string;
}

export interface DaffModalConfiguration {
  /**
   * A hook for what to do when the backdrop behind a
   * DaffModalComponent is interacted with.
   */
  onBackdropClicked?: () => void;

  /** Sets the `aria-labelledby` property on the modal. */
  ariaLabelledBy?: string;

  /**
   * The position of the modal. If not provided, defaults to centered horizontally and vertically.
   * Horizontal position is always center.
   *
   * @example
   * ```ts
   * // Center (default)
   * { vertical: 'center' }
   *
   * // Top with offset
   * { vertical: 'top', offsetTop: '2rem' }
   * ```
   */
  position?: DaffModalPosition;
}
