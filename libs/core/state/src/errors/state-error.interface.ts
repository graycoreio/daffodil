/**
 * An error object that can be serialized in state.
 */
export interface DaffStateError {
  /**
   * The error code that uniquely identifies the type of error.
   */
  code: string;
  /**
   * A message that describes the error.
   */
  message: string;
  /**
   * Whether the error is non-critical and recoverable or catastrophic and unrecoverable.
   * This field is optional. If omitted, the error is assumed to be unrecoverable.
   */
  recoverable?: boolean;
}
