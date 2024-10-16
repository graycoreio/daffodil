import { createConfigInjectionToken } from '@daffodil/core';

type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };
type XOR<T, U> = (T | U) extends Record<string,unknown> ? (Without<T, U> & U) | (Without<U, T> & T) : T | U;

export interface VerticalPositionTypes { vertical: 'top' | 'bottom' };

export interface HorizontalPositionTypes { horizontal: 'left' | 'center' | 'right' };

export type DaffToastPosition = VerticalPositionTypes & HorizontalPositionTypes;

export interface DaffToastOptions {
  position: DaffToastPosition;
  useParent: boolean;
}

export const daffToastDefaultOptions: DaffToastOptions = {
  position: {
    vertical: 'top',
    horizontal: 'right',
  },
  useParent: true,
};

export const {
  token: DAFF_TOAST_OPTIONS,
  /**
   * Provider function for {@link DAFF_TOAST_OPTIONS}.
   */
  provider: provideDaffToastOptions,
} = createConfigInjectionToken<DaffToastOptions>(daffToastDefaultOptions, 'DAFF_TOAST_OPTIONS');
