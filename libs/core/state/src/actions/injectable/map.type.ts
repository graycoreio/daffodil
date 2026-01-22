import { Action } from '@ngrx/store';

import { ActionTransformedInjection } from './transformed.type';

/**
 * A map of action names to {@link ActionTransformedInjection}s.
 */
export type InjectableActionMap<T extends Record<string, any>, Actions extends Action = Action> = {[K in keyof T]: {[Type in Actions['type']]?: ActionTransformedInjection<T[K], Extract<Actions, {type: Type}>>}};
