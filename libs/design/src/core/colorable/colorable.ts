/**
 * @deprecated Deprecated in version 0.92.0. Will be removed in version 1.0.0.
 */
export interface DaffColorable {
  color: DaffColor;
}

/**
 * The available color options.
 */
export type DaffColor = 'primary' | 'secondary' | 'tertiary' | 'light' | 'dark' | 'theme' | 'theme-contrast' | 'black' | 'white' | undefined;

/**
 * @deprecated Deprecated in version 0.92.0. Will be removed in version 1.0.0.
 */
export type DaffPalette = DaffColor;

/**
 * The available color options.
 */
export enum DaffColorEnum {
  /**
   * The primary color.
   */
  Primary = 'primary',

  /**
   * The secondary color.
   */
  Secondary = 'secondary',

  /**
   * The tertiary color.
   */
  Tertiary = 'tertiary',

  /**
   * A light color that does not change based on the theme.
   */
  Light = 'light',

  /**
   * A dark color that does not change based on the theme.
   */
  Dark = 'dark',

  /**
   * A color that matches the theme.
   */
  Theme = 'theme',

  /**
   * A color that contrasts against the theme.
   */
  ThemeContrast = 'theme-contrast',

  /**
   * @deprecated Deprecated in version 0.82.0. Will be removed in version 1.0.0.
   */
  Black = 'black',

  /**
   * @deprecated Deprecated in version 0.82.0. Will be removed in version 1.0.0.
   */
  White = 'white',
}
