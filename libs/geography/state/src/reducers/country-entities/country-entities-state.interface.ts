import { EntityState } from '@ngrx/entity';

import { DaffCountry } from '@daffodil/geography';

/**
 * Interface for country entity state.
 */
export type DaffCountryEntityState<T extends DaffCountry = DaffCountry> = EntityState<T>;
