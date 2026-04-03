/**
 * A color palette with a collection of shades.
 *
 * @docs-private
 */
export interface ColorPalette {
  /**
   * The raw name used for CSS class generation, e.g. `"primary"`.
   */
  internal_name: string;
  /**
   * A display-friendly name with prefixes stripped, e.g. `"primary"` from `"daff-primary"`.
   */
  friendly_name: string;
  /**
   * The palette's shades sorted by step.
   */
  shades: ColorShade[];
}

/**
 * A single shade within a {@link ColorPalette}.
 *
 * @docs-private
 */
export interface ColorShade {
  /**
   * The numeric shade step, e.g. `10`, `20`, `100`.
   */
  step: number;
  /**
   * The hex color value, e.g. `"#ff0000"`.
   */
  hex: string;
}
