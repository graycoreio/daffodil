export interface SchemaListItem<T> {
  '@type': 'ListItem';
  position: number;
  item: T;
}

/**
 * A list of items in a structured manner representing content
 * such as carousels within supporting applications.
 *
 * See https://developers.google.com/search/docs/appearance/structured-data/carousels-beta
 */
export interface SchemaItemList<T> {
  '@type': 'ItemList';
  'itemListElement': SchemaListItem<T>[];
};

/**
 * Another name for an item list. These terms are used interchangeably.
 *
 * @see  {@link SchemaItemList}.
 */
export type SchemaCarousel<T> = SchemaItemList<T>;
