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
 * Configuration for an action button inside a toast. Actions are rendered using {@link DaffButtonComponent}.
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
   * The button size.
   *
   * Matches one of the predefined sizes supported by {@link DaffButtonComponent}.
   */
  size?: DaffToastActionButtonSize;

  /**
   * The button color.
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
   * Emits when the action is triggered.
   */
  eventEmitter?: EventEmitter<DaffToastAction>;
}

export interface DaffToastActionEvent {
  event: MouseEvent;

  action: DaffToastAction;
}
