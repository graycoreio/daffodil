import { DaffSubdivision } from './subdivision';

/**
 * A representation of a country on the planet Earth.
 * See: ISO-3166
 */
export interface DaffCountry {
	id: string;
	name: string;
	name_en: string;
	alpha2: string;
	alpha3: string;
	subdivisions: DaffSubdivision[];
}
