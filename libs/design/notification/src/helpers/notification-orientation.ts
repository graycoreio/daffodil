/**
 * The available orientations for a notification.
 *
 * | Orientation | Description |
 * | -- | -- |
 * | `vertical` | Stacks notification content from top to bottom. This is the default orientation. |
 * | `horizontal` | Places notification content side-by-side. |
 */
export type DaffNotificationOrientation = 'horizontal' | 'vertical';

/**
 * Enum for representing the available notification orientations.
 * See {@link DaffNotificationOrientation} for descriptions of each orientation.
 */
export enum DaffNotificationOrientationEnum {
  Horizontal = 'horizontal',
  Vertical = 'vertical',
}
