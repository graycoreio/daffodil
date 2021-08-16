import { Action } from '@ngrx/store';

import { DaffSeoMetaDefinition } from '@daffodil/seo';

import { DaffSeoUpdateActionPair } from './update-action-pair.interface';

/**
 * Describes how to set meta tags based on dispatched actions.
 */
export type DaffSeoMetaUpdate<T extends Action = Action> = DaffSeoUpdateActionPair<T, DaffSeoMetaDefinition>;
