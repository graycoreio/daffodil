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
 * This enum will be removed from the public api in v1.0.0.
 */
export enum DaffTextAlignmentEnum {
  Left = 'left',
  Center = 'center',
  Right = 'right'
}
