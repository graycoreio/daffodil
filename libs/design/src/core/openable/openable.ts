/**
 * An interface for giving a component the ability to display an open UI.
 * In order to be openable, the class must implement this property.
 */
export interface DaffOpenable {
  open: boolean;
  reveal: () => void;
  hide: () => void;
  toggle: () => void;
}
