/**
 * The slot context for {@link DaffSelectOptionDirective}.
 */
export interface DaffSelectOptionDirectiveContext<T = unknown> {
  /**
   * The option for this element in the list.
   */
  option: T;
  /**
   * Whether this option is the currently selected one.
   */
  isSelected: boolean;
  /**
   * Whether this option is the currently highlighted one in the options list.
   */
  isHighlighted?: boolean;
}
