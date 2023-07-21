import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';

/**
 * A function that is called when the user is unauthenticated.
 * When a logged-in user is unauthenticated, various packages may perform cleanup tasks.
 * These hooks will be called in no particular order before the client driver state is reset.
 * Daffodil will wait for at least one emission from each hook before proceeding.
 */
export type DaffAuthUnauthenticatedHook = (trigger: Action['type']) => Observable<unknown>;
