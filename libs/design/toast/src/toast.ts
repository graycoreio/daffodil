import { EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

import {
  DaffButtonSize,
  DaffPalette,
  DaffStatus,
} from '@daffodil/design';

/**
 * An interface for properties of actions, specifically the DaffButtonComponent, placed inside of a toast.
 */
export interface DaffToastAction {
  content: string;

  size?: DaffButtonSize;

  color?: DaffPalette;

  status?: DaffStatus;

  type?: 'raised' | 'underline' | 'stroked' | 'flat' | undefined;

  data?: Record<string, any>;

  eventEmitter?: EventEmitter<DaffToastAction>;
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
}
