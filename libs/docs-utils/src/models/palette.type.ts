type HexColorValue = `#${string}`;
type PaletteShade = `${number}`;

/**
 * A dictionary of the color shades '10', '20', etc. mapped to hex values.
 */
export type DaffDocsPaletteColor = Record<PaletteShade, HexColorValue>;

/**
 * A dictionary of the color name mapped to the palette color shades.
 */
export type DaffDocsPalette = Record<string, DaffDocsPaletteColor>;
