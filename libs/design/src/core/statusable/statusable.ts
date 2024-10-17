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
 * - 'info': Indicatea an informational status.
 * - 'warn': Indicates a warning status.
 * - 'critical': Indicates a critical or error status.
 * - 'success': Indicates a success status.
 */
export type DaffStatus = 'info' | 'warn' | 'critical' | 'success';

/**
 * The `DaffStatusEnum` enumerates the possible status values for a component.
 */
export enum DaffStatusEnum {
  Info = 'info',
  Warn = 'warn',
  Critical = 'critical',
  Success = 'success'
}
