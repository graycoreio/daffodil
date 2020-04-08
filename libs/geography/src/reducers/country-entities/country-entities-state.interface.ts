import { EntityState } from '@ngrx/entity';

import { DaffCountry } from '../../models/country';

/**
 * Interface for country entity state.
 */
export interface DaffCountryEntityState<T extends DaffCountry> extends EntityState<T> {}
