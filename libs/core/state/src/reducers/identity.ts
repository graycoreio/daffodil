import { Action } from '@ngrx/store';

/**
 * A simple reducer that simply returns the passed state.
 * This is useful for stubbing out parts of state that are not covered in an injected extra reducer map.
 */
export const daffIdentityReducer = <T = unknown>(state: T, action: Action): T => state;
