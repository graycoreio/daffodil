/**
 * An interface for giving a component the ability to display an open UI.
 */
export interface DaffOpenable {
  /** Whether a component is open or not */
  open: boolean;

  /** Reveal the component */
  reveal: () => void;

  /** Hide the component */
  hide: () => void;

  /** Toggles the component between open and not open */
  toggle: () => void;
}
