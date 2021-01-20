import { EntityState } from '@ngrx/entity';
import { DaffCountry } from '@daffodil/geography';
/**
 * Interface for country entity state.
 */
export interface DaffCountryEntityState<T extends DaffCountry = DaffCountry> extends EntityState<T> {
}
