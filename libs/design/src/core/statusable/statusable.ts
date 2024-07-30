/**
 * The `DaffStatusable` interface defines a component that can have a status.
 * This status determines the styling or behavior of the component.
 */
export interface DaffStatusable {
  /**
   * The status of the component.
   */
  status: DaffStatus;
}

/**
 * The `DaffStatus` type defines the possible status values that a component can have.
 * - 'warn': Indicates a warning status.
 * - 'danger': Indicates a danger or error status.
 * - 'success': Indicates a success status.
 */
export type DaffStatus = 'warn' | 'danger' | 'success';

/**
 * The `DaffStatusEnum` enumerates the possible status values for a component.
 */
export enum DaffStatusEnum {
  Warn = 'warn',
  Danger = 'danger',
  Success = 'success'
}
