/**
 * In order to be colorable, our class must implement this property
 */
export interface DaffColorable {
    color: DaffPalette;
}

/**
 * These are the valid options that can be passed to a DaffColorable component
 */
export type DaffPalette =
    'primary' | 'secondary' | 'accent' | 'tertiary' | //TODO: damienwebdev Deprecate accent
    'black' | 'white' |
    'theme' | 'theme-contrast' | undefined;

