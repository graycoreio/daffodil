/**
 * Interface for giving a component the ability to customize text alignment for component-specific UI.
 */
export interface DaffTextAlignable {
  textAlignment: DaffTextAlignment;
}

/**
 * The possible types that can be passed to a DaffTextAlignable component
 */
export type DaffTextAlignment = 'left' | 'center' | 'right';
export enum DaffTextAlignmentEnum {
  Left = 'left',
  Center = 'center',
  Right = 'right'
}
