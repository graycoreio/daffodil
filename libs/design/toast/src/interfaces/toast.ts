import { Observable } from 'rxjs';

import { DaffStatus } from '@daffodil/design';

import { DaffToastAction } from './toast-action';

/** Possible data that can be shown on a toast */
export interface DaffToastData {
  /** A title that provides a quick oveview of the toast */
  title: string;

  /** A short message used to provide additional details about the toast */
  message?: string;

  /** Sets a status on the toast */
  status?: DaffStatus;

  /** Used to display actions in the toast */
  actions?: DaffToastAction[];

  /** Whether or not the toast is dismissible */
  dismissible?: boolean;
}

export interface DaffToast extends DaffToastData {
  dismiss: () => void;
  dismissalStream: Observable<void | number>;
}
