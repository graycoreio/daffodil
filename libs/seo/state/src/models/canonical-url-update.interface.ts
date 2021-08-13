import { Action } from '@ngrx/store';

import { DaffSeoUpdateActionPair } from './update-action-pair.interface';

/**
 * Describes how to set canonical URLs based on dispatched actions.
 */
export type DaffSeoCanonicalUrlUpdate<T extends Action = Action> = DaffSeoUpdateActionPair<T, string>;
