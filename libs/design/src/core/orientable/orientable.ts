/**
 * @deprecated Deprecated in version 0.92.1. Will be removed in version 0.95.0.
 *
 * Interface for giving a component the ability to customize text alignment for component-specific UI.
 */
export interface DaffOrientable {
  orientation: DaffOrientation;
}

/**
 * The possible types that can be passed to a DaffOrientable component
 */
export type DaffOrientation = 'horizontal' | 'vertical';

/**
 * @deprecated Deprecated in version 0.93.0. Will be removed in version 0.96.0.
 */
export enum DaffOrientationEnum {
  Horizontal = 'horizontal',
  Vertical = 'vertical',
}
