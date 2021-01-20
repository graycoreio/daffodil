/**
 * An error object containing info about the exception that generated it.
 */
export interface DaffError extends Error {
    code: string;
    message: string;
}
