import { EventEmitter } from '@angular/core';

import {
  DaffButtonSize,
  DaffPalette,
  DaffStatus,
} from '@daffodil/design';

/**
 * An interface for properties of actions, specifically the DaffButtonComponent, placed inside of a toast.
 */
export interface DaffToastAction {
  type?: 'raised' | 'underline' | 'stroked' | 'flat' | undefined;

  content: string;

  size?: DaffButtonSize;

  color?: DaffPalette;

  status?: DaffStatus;

  data?: Record<string, any>;

  eventEmitter?: EventEmitter<DaffToastAction>;
}

export interface DaffToastActionEvent {
  event: MouseEvent;

  action: DaffToastAction;
}
