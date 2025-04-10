import { EventEmitter } from '@angular/core';

import {
  DaffPalette,
  DaffStatus,
} from '@daffodil/design';

import {
  DaffToastActionButtonSize,
  DaffToastActionButtonType,
} from './toast-action.type';

/**
 * The configurations for an action button rendered inside a toast
 * displayed using the {@link DaffButtonComponent}.
 */
export interface DaffToastAction {
  /**
   * The type of button.
   *
   * Matches one of the predefined types supported by {@link DaffButtonComponent}.
   */
  type?: DaffToastActionButtonType;

  /**
   * The text displayed on the button.
   */
  content: string;

  /**
   * The size of the button.
   *
   * Matches one of the predefined sizes supported by {@link DaffButtonComponent}.
   */
  size?: DaffToastActionButtonSize;

  /**
   * The color of the button.
   *
   * Do not use both `color` and `status` simultaneously.
   */
  color?: DaffPalette;

  /**
   * The button status.
   *
   * Do not use both `color` and `status` simultaneously.
   */
  status?: DaffStatus;

  /**
   * Data associated with the action.
   */
  data?: Record<string, any>;

  /**
   * An event emitter that fires when the action is triggered.
   */
  eventEmitter?: EventEmitter<DaffToastAction>;
}

export interface DaffToastActionEvent {
  event: MouseEvent;

  action: DaffToastAction;
}
