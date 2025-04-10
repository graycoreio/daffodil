export interface DaffColorable {
  color: DaffPalette;
}

/**
 * These are the valid options that can be passed to a DaffColorable component.
 */
export type DaffPalette = 'primary' | 'secondary' | 'tertiary' | 'light' | 'dark' | 'theme' | 'theme-contrast' | 'black' | 'white' | undefined;

/**
 * Enumerates the available color palette options for a component.
 * These values can be used to apply specific color styles to components within the application.
 */
export enum DaffPaletteEnum {
  /**
   * Your primary color.
   */
  Primary = 'primary',

  /**
   * Your secondary color.
   */
  Secondary = 'secondary',

  /**
   * Your tertiary color.
   */
  Tertiary = 'tertiary',

  /**
   * A light color that does not change based on the defined theme.
   */
  Light = 'light',

  /**
   * A dark color that does not change based on the defined theme.
   */
  Dark = 'dark',

  /**
   * A color that matches the defined theme.
   */
  Theme = 'theme',

  /**
   * A color that contrasts against the defined theme.
   */
  ThemeContrast = 'theme-contrast',

  /**
   * @deprecated Deprecated in version 0.82.0. Will be removed in version 0.85.0.
   * Black. It's dark.
   */
  Black = 'black',

  /**
   * @deprecated Deprecated in version 0.82.0. Will be removed in version 0.85.0.
   * White. It's bright.
   */
  White = 'white',
}
