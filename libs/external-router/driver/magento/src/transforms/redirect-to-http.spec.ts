import { magentoTransformRedirectToHttpCode } from './redirect-to-http';

describe('@daffodil/external-router/driver/magento | transforms | magentoTransformRedirectToHttpCode', () => {
  let result: number;

  describe('when the redirect code is 0', () => {
    beforeEach(() => {
      result = magentoTransformRedirectToHttpCode(0);
    });

    it('should return 200', () => {
      expect(result).toEqual(200);
    });
  });

  describe('when the redirect code is not 0', () => {
    beforeEach(() => {
      result = magentoTransformRedirectToHttpCode(301);
    });

    it('should return the redirect code', () => {
      expect(result).toEqual(301);
    });
  });
});
