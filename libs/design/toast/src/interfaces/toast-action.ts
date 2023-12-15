import { EventEmitter } from '@angular/core';

import {
  DaffPalette,
  DaffStatus,
} from '@daffodil/design';

/**
 * An interface for properties of actions, specifically the DaffButtonComponent, placed inside of a toast.
 */
export interface DaffToastAction {
  type?: 'raised' | 'underline' | 'stroked' | 'flat' | undefined;

  content: string;

  /**
   * The size of the button, as defined in the {@link DaffButtonComponent}.
   */
  size?: 'sm' | 'md' | 'lg' | undefined;

  color?: DaffPalette;

  status?: DaffStatus;

  data?: Record<string, any>;

  eventEmitter?: EventEmitter<DaffToastAction>;
}

export interface DaffToastActionEvent {
  event: MouseEvent;

  action: DaffToastAction;
}
