import { DaffTheme } from '../types/theme';

/**
 * Computes the appropriate application theme from the specified values.
 * It cascades from `storedPreference` to `osPreference` to `defaultTheme`.
 */
export const daffComputeThemeSetting = (
  osPreference?: DaffTheme,
  storedPreference?: DaffTheme,
  defaultTheme: DaffTheme = DaffTheme.Dark,
): DaffTheme => {
  if (storedPreference) {
    return storedPreference;
  }

  if (osPreference === 'dark') {
    return DaffTheme.Dark;
  }

  if (osPreference === 'light') {
    return DaffTheme.Light;
  }

  return defaultTheme;
};
