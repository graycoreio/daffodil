import {
  InjectionToken,
  ValueProvider,
} from '@angular/core';

type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };
type XOR<T, U> = (T | U) extends Record<string,unknown> ? (Without<T, U> & U) | (Without<U, T> & T) : T | U;

export type VerticalPositionTypes = XOR<XOR<{ top: string }, { bottom: string }>, { verticallyCenter: string }>;

export type HorizontalPositionTypes = XOR<XOR<{ left: string }, { right: string }>, { horizontallyCenter: string }>;

export type DaffToastPosition = VerticalPositionTypes & HorizontalPositionTypes;

export interface DaffToastOptions {
  position: DaffToastPosition;
}

export const daffToastDefaultOptions: DaffToastOptions = {
  position: {
    top: '128px',
    right: '24px',
  },
};

export const DAFF_TOAST_OPTIONS = new InjectionToken('DAFF_TOAST_OPTIONS', { providedIn: 'root', factory: () => daffToastDefaultOptions });

export const provideDaffToastOptions = (options: DaffToastOptions): ValueProvider => ({ provide: DAFF_TOAST_OPTIONS, useValue: {
  ...daffToastDefaultOptions,
  ...options,
}});
