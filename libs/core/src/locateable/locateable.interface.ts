/**
 * An object that has a location referenced by a URL.
 */
export interface DaffLocatable {
  /**
   * The URL describing the location of the entity.
   * It should be relative to the domain root with a leading slash, i.e. `/path/to/entity`.
   */
  url: string;
}
