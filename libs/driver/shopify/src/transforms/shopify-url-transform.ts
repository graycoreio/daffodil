/**
 * Transforms a DaffLocatable url into a Shopify handle string
 *
 * See {@link DaffLocatable} for more information on the requirements for the url argument.
 *
 * @param url - DaffLocatable url (e.g. /coffee-pot.html)
 * @returns shopify-readable handle
 */
export const shopifyUrlTransformer = (url: string): string => {
  const noLeadingSlashes = url.split('/').pop() || '';
  const noTrailingExtension = noLeadingSlashes.split('.')[0];
  const handle = noTrailingExtension;
  return handle;
};
