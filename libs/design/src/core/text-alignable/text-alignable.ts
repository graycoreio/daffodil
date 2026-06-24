/**
 * @deprecated Deprecated in version 0.92.1. Will be removed in version 1.0.0.
 */
export interface DaffTextAlignable {
  textAlignment: DaffTextAlignment;
}

/**
 *  * The available text alignment options.
 */
export type DaffTextAlignment = 'left' | 'center' | 'right';

/**
 * @deprecated Deprecated in version 0.93.0. Will be removed in version 0.96.0.
 *
 * This enum will be removed from the public api in v1.0.0.
 */
export enum DaffTextAlignmentEnum {
  Left = 'left',
  Center = 'center',
  Right = 'right'
}
