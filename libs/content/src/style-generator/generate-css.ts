import { isUnitless } from './is-unitless';
import { stylesToCSS } from './styles-to-css';

/**
 * Generates complete CSS for a class with base styles and breakpoints
 */
export const generateCSS = (
  className: string,
  styles: {
    base?: {[key: string]: string | number};
    breakpoints?: {[mediaQuery: string]: {[key: string]: string | number}};
  },
): string => {
  let css = '';

  // Base styles
  if (styles.base) {
    css += `.${className} {\n${stylesToCSS(styles.base)}\n}\n`;
  }

  // Breakpoint styles using container queries
  if (styles.breakpoints) {
    for (const [mediaQuery, breakpointStyles] of Object.entries(styles.breakpoints)) {
      // Convert media query to container query
      css += `\n@container ${mediaQuery} {\n`;

      css += `  .${className} {\n`;
      css += Object.entries(breakpointStyles)
        .map(([key, value]) => {
          const val = typeof value === 'number' && !isUnitless(key) ? `${value}px` : value;
          return `    ${key}: ${val};`;
        })
        .join('\n');
      css += '\n  }\n';
      css += '}\n';
    }
  }

  return css;
};
