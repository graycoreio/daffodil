import { OperatingSystemThemePreference } from '../services/os-theme/ostheme.service';
import { DaffodilTheme } from '../types/theme';

export const daffComputeThemeSetting = (
  osPreference: OperatingSystemThemePreference = undefined,
  storedPreference: DaffodilTheme | undefined = undefined,
  defaultTheme: DaffodilTheme = 'dark',
): DaffodilTheme => {

  if (storedPreference) {
    return storedPreference;
  }

  if (osPreference === 'dark') {
    return 'dark';
  }


  if (osPreference === 'light') {
    return 'light';
  }

  return defaultTheme;
};
