import { isUnitless } from './is-unitless';

/**
 * Converts a style object to CSS string
 */
export const stylesToCSS = (styles: {[key: string]: string | number}): string => Object.entries(styles)
  .map(([key, value]) => {
    const val = typeof value === 'number' && !isUnitless(key) ? `${value}px` : value;
    return `  ${key}: ${val};`;
  })
  .join('\n');
