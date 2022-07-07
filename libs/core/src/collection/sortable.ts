/**
 * The metadata that describes the sorting behavior of a collection of elements.
 */
export interface DaffSortOptions {
  default: DaffSortOption['value'];
  options: DaffSortOption[];
}


/**
 * One particular option used to sort a collection of elements;
 */
export interface DaffSortOption {
  label: string;
  value: any;
}

/**
 * The direction in which to sort a list of elements, e.g. if the list was
 * sorted alphabetically, "Ascending" would be from "A-Z",
 * and "Descending" would be from "Z-A".
 */
export enum DaffSortDirectionEnum {
  Ascending = 'ASC',
  Descending = 'DSC'
}

/**
 * Describes the properties of a collection that make the collection able to be
 * sorted by Daffodil.
 */
export interface DaffSortable {

  /**
   * The available options by which to sort the collection.
   */
  sortOptions: DaffSortOptions;

  /**
   * The currently applied sorting option.
   */
  appliedSortOption: DaffSortOption['value'];

  /**
   * The currently applied sort direction.
   */
  appliedSortDirection: DaffSortDirectionEnum;
}
