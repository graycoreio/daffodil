/**
 * An error object containing info about the exception that generated it.
 */
export interface DaffError extends Error {
  /**
   * A string that uniquely identifies the error.
   */
  code: string;
  /**
   * Contains additional relevant information to the cause and/or solution of the error.
   */
  message: string;
  /**
   * Whether the error is non-critical and recoverable or catastrophic and unrecoverable.
   */
  recoverable: boolean;
}
