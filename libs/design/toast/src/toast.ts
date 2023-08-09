import { Observable } from 'rxjs';

import {
  DaffButtonSize,
  DaffPalette,
  DaffStatus,
} from '@daffodil/design';

export interface DaffToastAction {
  title: string;

  size?: DaffButtonSize;

  color?: DaffPalette;

  status?: DaffStatus;

  type?: 'raised' | 'underline' | 'stroked' | 'flat' | undefined;

  data?: unknown;
}

export interface DaffToastData {
  title: string;

  message?: string;

  status?: DaffStatus;

  actions?: DaffToastAction[];
}

export interface DaffToastActionEvent {
  event: MouseEvent;

  action: DaffToastAction;
}

export interface DaffToast extends DaffToastData {
  dismiss: () => void;

  actions$: Observable<DaffToastActionEvent>;
}
