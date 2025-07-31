/**
 * The available orientations for a card.
 *
 * | Orientation | Description |
 * | -- | -- |
 * | `vertical` | Stacks card content from top to bottom. This is the default orientation. |
 * | `horizontal` | Places card content side-by-side. On smaller screens, horizontal cards automatically switch to vertical for responsiveness. |
 */
export type DaffCardOrientation = 'vertical' | 'horizontal';

/**
 * Enum for representing the available card orientations.
 * See {@link DaffCardOrientation} for descriptions of each orientation.
 */
export enum DaffCardOrientationEnum {
  Vertical = 'vertical',
  Horizontal = 'horizontal',
}
