/**
 * @deprecated Deprecated in version 0.92.0. Will be removed in version 0.95.0.
 */
export interface DaffColorable {
  color: DaffColor;
}

/**
 * The available color options.
 */
export type DaffColor = 'primary' | 'secondary' | 'tertiary' | 'light' | 'dark' | 'theme' | 'theme-contrast' | 'black' | 'white' | undefined;

/**
 * @deprecated Deprecated in version 0.92.0. Will be removed in version 0.95.0.
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
   * A light color.
   *
   * This does not track the theme mode. An element with this color stays light
   * in both light and dark mode. Use `Theme` or `ThemeContrast` instead for a
   * color that flips with the mode.
   */
  Light = 'light',

  /**
   * A dark color.
   *
   * This does not track the theme mode. An element with this color stays dark
   * in both light and dark mode. Use `Theme` or `ThemeContrast` instead for a
   * color that flips with the mode.
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
