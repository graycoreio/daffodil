/**
 * Transforms a Magento redirect code to the appropriate HTTP status code.
 */
export const magentoTransformRedirectToHttpCode = (code: number): number =>
  code === 0 ? 200 : code;
