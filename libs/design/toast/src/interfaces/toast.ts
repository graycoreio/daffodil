import { Observable } from 'rxjs';

import { DaffStatus } from '@daffodil/design';

import { DaffToastAction } from './toast-action';

/**
 * Data that defines the content and behavior of a toast.
 */
export interface DaffToastData {
  /**
   * The primary text that summarizes the purpose of the toast.
   */
  title: string;

  /**
   * Provides additional details or context about the toast.
   */
  message?: string;

  /**
   * The visual status of the toast.
   */
  status?: DaffStatus;

  /**
   * Used to display actionable buttons related to the toast.
   */
  actions?: DaffToastAction[];

  /**
   * Whether the toast can be manually dismissed with a close button.
   */
  dismissible?: boolean;
}

/**
 * A toast instance.
 */
export interface DaffToast extends DaffToastData {
  /**
   * Closes the toast.
   */
  dismiss: () => void;

  /**
   * Emits when the toast has been closed.
   */
  dismissalStream: Observable<void>;
}
