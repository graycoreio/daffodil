/**
 * CSS properties that don't need 'px' units when given numbers
 */
const UNITLESS_PROPS = new Set([
  'opacity', 'z-index', 'font-weight', 'line-height', 'flex', 'flex-grow',
  'flex-shrink', 'order', 'grid-column', 'grid-row',
]);

export const isUnitless = (property: string): boolean =>
  UNITLESS_PROPS.has(property);
