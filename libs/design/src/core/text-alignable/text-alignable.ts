/**
 * An interface for any component or directive that can be text alignable.
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
