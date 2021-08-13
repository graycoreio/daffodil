import { Action } from '@ngrx/store';

import { DaffSeoUpdateActionPair } from './update-action-pair.interface';

/**
 * Describes how to set page titles based on dispatched actions.
 */
export type DaffSeoTitleUpdate<T extends Action = Action> = DaffSeoUpdateActionPair<T, string>;
