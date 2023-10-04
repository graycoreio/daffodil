import { Observable } from 'rxjs';

import { DaffStatus } from '@daffodil/design';

import { DaffToastAction } from './toast-action';

export interface DaffToastData {
  title: string;

  message?: string;

  status?: DaffStatus;

  actions?: DaffToastAction[];

  dismissible?: boolean;
}

export interface DaffToast extends DaffToastData {
  dismiss: () => void;
  dismissalStream: Observable<void | number>;
}
