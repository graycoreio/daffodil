import { Action } from '@ngrx/store';

import { DaffSeoUpdateActionPair } from './update-action-pair.interface';

export type DaffSeoTitleUpdate<T extends Action = Action> = DaffSeoUpdateActionPair<T, string>;
