/**
 * Transforms a faker-js generated object name to a valid shopify handle (lowercase chars with hyphens instead of spaces)
 *
 * @param title - name of a product
 * @returns shopify-readable handle
 */
export const shopifyHandleTransformer = (title: string): string => {
  const noSpaces = title.replace(/ /g, '-');
  const handle = noSpaces.toLowerCase();
  return handle;
};
