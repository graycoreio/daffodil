
import { DaffExternallyResolvableUrl } from '@daffodil/external-router';

import { processRedirects } from './process-redirect';
import { DaffExternalRouterPermanentRedirectError } from '../errors/permanent-redirect';
import { DaffExternalRouterTemporaryRedirectError } from '../errors/temporary-redirect';

describe('@daffodil/external-router/driver/magento | processRedirects', () => {

  const createResolvableUrl = (code: number): DaffExternallyResolvableUrl => ({
    id: 'test',
    url: 'test',
    type: 'some-type',
    code,
  });

  it('should do nothing if the error code is 0', () => {
    const response = createResolvableUrl(0);

    expect(processRedirects(response)).toEqual(response);
  });

  it('should throw an permanent redirect error if the redirectCode is 301', () => {
    const response = createResolvableUrl(301);

    expect(() => processRedirects(response)).toThrowMatching((e) => e instanceof DaffExternalRouterPermanentRedirectError);
  });

  it('should throw an temporary redirect error if the redirectCode is 302', () => {
    const response = createResolvableUrl(302);

    expect(() => processRedirects(response)).toThrowMatching((e) => e instanceof DaffExternalRouterTemporaryRedirectError);

  });
});
