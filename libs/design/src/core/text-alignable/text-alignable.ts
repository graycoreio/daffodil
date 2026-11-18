/**
 * @deprecated Deprecated in version 0.92.1. Will be removed in version 0.95.0.
 */
export interface DaffTextAlignable {
  textAlignment: DaffTextAlignment;
}

/**
 *  * The available text alignment options.
 */
export type DaffTextAlignment = 'left' | 'center' | 'right';

/**
 * @deprecated Deprecated in version 0.93.0. Will be removed in version 1.0.0.
 *
 * This is deprecated from the public api, not a full removal.
 */
export enum DaffTextAlignmentEnum {
  Left = 'left',
  Center = 'center',
  Right = 'right'
}
