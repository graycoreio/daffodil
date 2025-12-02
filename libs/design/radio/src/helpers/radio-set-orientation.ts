/**
 * The available orientations for a radio set.
 *
 * | Orientation | Description |
 * | -- | -- |
 * | `vertical` | Stacks radio set content from top to bottom. This is the default orientation. |
 * | `horizontal` | Places radio set content side-by-side. On smaller screens, horizontal radio sets automatically switch to vertical for responsiveness. |
 */
export type DaffRadioSetOrientation = 'vertical' | 'horizontal';

/**
 * Enum for representing the available radio set orientations.
 * See {@link DaffRadioSetOrientation} for descriptions of each orientation.
 */
export enum DaffRadioSetOrientationEnum {
  Vertical = 'vertical',
  Horizontal = 'horizontal',
}
