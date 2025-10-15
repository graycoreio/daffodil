/**
 * Interface for giving a component the ability to customize text alignment for component-specific UI.
 */
export interface DaffOrientable {
  orientation: DaffOrientation;
}

/**
 * The possible types that can be passed to a DaffOrientable component
 */
export type DaffOrientation = 'horizontal' | 'vertical';
export enum DaffOrientationEnum {
  Horizontal = 'horizontal',
  Vertical = 'vertical',
}
