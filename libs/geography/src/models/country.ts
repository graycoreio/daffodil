import { ID } from '@daffodil/core';

import { DaffSubdivision } from './subdivision';

/**
 * A representation of a country on the planet Earth.
 * See: ISO-3166
 */
export interface DaffCountry {
	id: ID;
	name: string;
	name_en: string;
	alpha2: string;
	alpha3: string;
  subdivisions: DaffSubdivision[];
  /**
   * Whether or not the country has been fully loaded.
   * If true, the subdivisions field will be populated if any exist.
   */
  loaded?: boolean;
}
