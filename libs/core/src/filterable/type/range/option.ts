/**
 * A particular option of a range pair.
 * Holds a value and a label.
 */
export interface DaffFilterRangeOption<T> {
  /**
   * The value for the range option; e.g. "10" for a price range option.
   */
  value: T;
  /**
   * A label to represent the range option in the UI.
   */
  label: string;
}
