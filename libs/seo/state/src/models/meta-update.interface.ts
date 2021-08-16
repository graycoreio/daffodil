import { Action } from '@ngrx/store';

import { DaffSeoMetaDefinition } from '@daffodil/seo';

import { DaffSeoUpdateActionPair } from './update-action-pair.interface';

export type DaffSeoMetaUpdate<T extends Action = Action> = DaffSeoUpdateActionPair<T, DaffSeoMetaDefinition>;
