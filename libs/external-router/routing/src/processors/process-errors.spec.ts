
import { DaffExternallyResolvableUrl } from '@daffodil/external-router';

import { DaffExternalRouterClientError } from '../errors/client-error';
import { DaffExternalRouterNotFoundError } from '../errors/not-found-error';
import { DaffExternalRouterServerError } from '../errors/server-error';
import { processErrors } from './process-errors';

describe('@daffodil/external-router/driver/magento | processErrors', () => {

  const createResolvableUrl = (code: number): DaffExternallyResolvableUrl => ({
    id: 'test',
    url: 'test',
    type: 'some-type',
    code,
  });

  it('should do nothing if the error code is 0', () => {
    const response = createResolvableUrl(0);

    expect(processErrors(response)).toEqual(response);
  });

  it('should do nothing if the error code is 301', () => {
    const response = createResolvableUrl(301);

    expect(processErrors(response)).toEqual(response);
  });

  it('should do nothing if the error code is 302', () => {
    const response = createResolvableUrl(302);

    expect(processErrors(response)).toEqual(response);

  });

  it('should throw a client error if the error code is 400', () => {
    const response = createResolvableUrl(400);

    expect(() => processErrors(response)).toThrowMatching((e) => e instanceof DaffExternalRouterClientError);
  });

  it('should throw a not found error if the error code is 404', () => {
    const response = createResolvableUrl(404);

    expect(() => processErrors(response)).toThrowMatching((e) => e instanceof DaffExternalRouterNotFoundError);
  });

  it('should throw a server error if the error code is 500', () => {
    const response = createResolvableUrl(500);

    expect(() => processErrors(response)).toThrowMatching((e) => e instanceof DaffExternalRouterServerError);
  });

  it('should throw a server error if the error code is 503', () => {
    const response = createResolvableUrl(503);

    expect(() => processErrors(response)).toThrowMatching((e) => e instanceof DaffExternalRouterServerError);
  });
});
