import { daffGetDocsAdapter } from './entities-adapter';
import { DaffDocsEntityState } from './entities-state.interface';

/**
 * Initial state for docs entity state.
 */
export const daffDocsEntitiesInitialState: DaffDocsEntityState = daffGetDocsAdapter().getInitialState();
