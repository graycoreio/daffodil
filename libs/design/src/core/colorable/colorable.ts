/**
 * In order to be colorable, our class must implement this property
 */
export interface DaffColorable {
  color: DaffPalette;
}

/**
 * These are the valid options that can be passed to a DaffColorable component
 */
export type DaffPalette = 'primary' | 'secondary' | 'tertiary' | 'black' | 'white' | 'theme' | 'theme-contrast' | undefined;

/**
 * Enumerates the available color palette options for a component.
 * These values can be used to apply specific color styles to components within the
 * application.
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
   * Black. It's dark.
   */
  Black = 'black',

  /**
   * White. It's bright.
   */
  White = 'white',

  /**
   * The default color for your theme.
   */
  Theme = 'theme',

  /**
   * A color that constrats against your defined theme.
   */
  ThemeContrast = 'theme-contrast'
}
