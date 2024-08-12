/**
 * An interface for giving a component the ability to display an open UI.
 * In order to be openable, the class must implement this property.
 */
export interface DaffOpenable {
  /** Whether the component is open or not */
  open: boolean;

  /** Sets reveal on the component */
  reveal: () => void;

  /** Sets hide on the component */
  hide: () => void;

  /** Sets toggle on the component */
  toggle: () => void;
}
