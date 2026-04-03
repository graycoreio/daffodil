import { EntityState } from '@ngrx/entity';

import { DaffDocsItem } from '@daffodil/docs-utils';

/**
 * Interface for docs entity state.
 */
export type DaffDocsEntityState<T extends DaffDocsItem = DaffDocsItem> = EntityState<T>;
