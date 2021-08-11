import { Action } from '@ngrx/store';

import { DaffSeoUpdateActionPair } from './update-action-pair.interface';

export type DaffSeoCanonicalUrlUpdate<T extends Action = Action> = DaffSeoUpdateActionPair<T, string>;
