import { DaffError } from './error.interface';
import { DaffInheritableError } from './inheritable-error';

/**
 * Checks if the passed object is a {@link DaffError}
 */
export const daffIsError = (error: any): boolean =>
  error instanceof DaffInheritableError || !!(<DaffError>error).code;
