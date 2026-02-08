import { Observable } from 'rxjs';

/**
 * Reference to modal instance.
 */
export interface DaffModalRef {
  /**
   * Closes the modal.
   */
  close(): void;

  /**
   * Emits when the modal close animation completes.
   */
  afterClosed: Observable<boolean>;
}
