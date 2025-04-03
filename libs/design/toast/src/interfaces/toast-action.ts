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
 * An interface for properties of actions, specifically the {@link DaffButtonComponent}, placed inside of the toast.
 */
export interface DaffToastAction {
  /**
   * The types of buttons available to be used, as defined in the {@link DaffButtonComponent}.
   */
  type?: DaffToastActionButtonType;

  /**
   * The text for the button.
   */
  content: string;

  /**
   * The size of the button, as defined in the {@link DaffButtonComponent}.
   */
  size?: DaffToastActionButtonSize;

  /**
   * The color of the button, as defined in the {@link DaffButtonComponent}.
   * Color and status should not be used simultaneously.
   */
  color?: DaffPalette;

  /**
   * The status of the button, as defined in the {@link DaffButtonComponent}.
   * Color and status should not be used simultaneously.
   */
  status?: DaffStatus;

  data?: Record<string, any>;

  /**
   * Sets an EventEmitter on a DaffToastAction
   */
  eventEmitter?: EventEmitter<DaffToastAction>;
}

export interface DaffToastActionEvent {
  event: MouseEvent;

  action: DaffToastAction;
}
