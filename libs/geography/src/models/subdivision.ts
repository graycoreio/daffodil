import { ID } from '@daffodil/core';

/**
 * The subdivisions of a country as per ISO-3166-2
 * For the United States this is commonly termed as "States"
 */
export interface DaffSubdivision {
  id: ID;
  name: string;
  iso_3166_2: string;
}
