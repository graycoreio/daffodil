import { createConfigInjectionToken } from '@daffodil/core';

import {
  DaffToastHorizontalPosition,
  DaffToastVerticalPosition,
} from '../helpers/toast-position';

type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };
type XOR<T, U> = (T | U) extends Record<string,unknown> ? (Without<T, U> & U) | (Without<U, T> & T) : T | U;

export interface DaffToastVerticalPositionInterface {
  vertical: DaffToastVerticalPosition;
};

export interface DaffToastHorizontalPositionInterface {
  horizontal: DaffToastHorizontalPosition;
};

export type DaffToastPosition = DaffToastVerticalPositionInterface & DaffToastHorizontalPositionInterface;

export interface DaffToastOptions {
  /**
   * The position of all toasts.
   */
  position: DaffToastPosition;

  /**
   * @docs-private
   */
  useParent?: boolean;
}

export const daffToastDefaultOptions: DaffToastOptions = {
  position: {
    vertical: 'top',
    horizontal: 'right',
  },
  useParent: true,
};

const result = createConfigInjectionToken<DaffToastOptions>(daffToastDefaultOptions, 'DAFF_TOAST_OPTIONS');

export const provideDaffToastOptions = result.provider;

export const DAFF_TOAST_OPTIONS = result.token;
