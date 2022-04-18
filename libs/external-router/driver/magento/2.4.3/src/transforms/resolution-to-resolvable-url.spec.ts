import { ID } from '@daffodil/core';
import { DaffExternallyResolvableUrl } from '@daffodil/external-router';
import { DAFF_EXTERNAL_ROUTER_NOT_FOUND_RESOLUTION } from '@daffodil/external-router/driver';
import {
  MagentoRoute,
  MagentoUrlRewriteEntityTypeEnum,
} from '@daffodil/external-router/driver/magento';

import { transformResolutionToResolvableUrlv243 } from './resolution-to-resolvable-url';

describe('@daffodil/external-router/driver/magento | transformResolutionToResolvableUrlv243', () => {
  let id: ID;
  let url: string;
  let route: MagentoRoute;
  let resolvableUrl: DaffExternallyResolvableUrl;

  beforeEach(() => {
    id = 'id';
    url = 'url';
    route = {
      relative_url: `/${url}?query=param#fragment`,
      type: MagentoUrlRewriteEntityTypeEnum.PRODUCT,
      redirect_code: 0,
      uid: id,
    };
    resolvableUrl = {
      id,
      url,
      type: MagentoUrlRewriteEntityTypeEnum.PRODUCT,
      code: 200,
    };
  });

  it('should return a resolvable url with the correct values', () => {
    const result = transformResolutionToResolvableUrlv243(route);
    expect(result.type).toEqual(MagentoUrlRewriteEntityTypeEnum.PRODUCT);
    expect(result.url).toEqual(url);
    expect(result.id).toEqual(id);
    expect(result.code).toEqual(200);
  });

  it('should return transform some additional data from the route', () => {
    const routeWithSeoData = {
      relative_url: `/${url}?query=param#fragment`,
      type: MagentoUrlRewriteEntityTypeEnum.PRODUCT,
      redirect_code: 0,
      name: 'Test Name',
      meta_title: 'Test Title',
      meta_description: 'Test Description',
      canonical_url: 'test-url.html',
      uid: id,
    };

    const expected: DaffExternallyResolvableUrl = {
      url,
      type: routeWithSeoData.type,
      id: routeWithSeoData.uid,
      code: 200,
      data: {
        canonical_url: routeWithSeoData.canonical_url,
        meta_description: routeWithSeoData.meta_description,
        title: routeWithSeoData.meta_title,
      },
    };

    expect(
      transformResolutionToResolvableUrlv243(routeWithSeoData),
    ).toEqual(expected);
  });

  it('should return name is meta_title is falsy', () => {
    const routeWithSeoData = {
      relative_url: `/${url}?query=param#fragment`,
      type: MagentoUrlRewriteEntityTypeEnum.PRODUCT,
      redirect_code: 0,
      name: 'Test Name',
      meta_title: null,
      meta_description: 'Test Description',
      canonical_url: 'test-url.html',
      uid: id,
    };

    const expected: DaffExternallyResolvableUrl = {
      url,
      type: routeWithSeoData.type,
      id: routeWithSeoData.uid,
      code: 200,
      data: {
        canonical_url: routeWithSeoData.canonical_url,
        meta_description: routeWithSeoData.meta_description,
        title: routeWithSeoData.name,
      },
    };

    expect(
      transformResolutionToResolvableUrlv243(routeWithSeoData),
    ).toEqual(expected);
  });

  it('should return an empty title if meta_title and name are falsy', () => {
    const routeWithSeoData = {
      relative_url: `/${url}?query=param#fragment`,
      type: MagentoUrlRewriteEntityTypeEnum.PRODUCT,
      redirect_code: 0,
      name: null,
      meta_title: null,
      meta_description: 'Test Description',
      canonical_url: 'test-url.html',
      uid: id,
    };

    const expected: DaffExternallyResolvableUrl = {
      url,
      type: routeWithSeoData.type,
      id: routeWithSeoData.uid,
      code: 200,
      data: {
        canonical_url: routeWithSeoData.canonical_url,
        meta_description: routeWithSeoData.meta_description,
        title: '',
      },
    };

    expect(
      transformResolutionToResolvableUrlv243(routeWithSeoData),
    ).toEqual(expected);
  });

  it('should transform null routes to the not found response', () => {
    expect(
      transformResolutionToResolvableUrlv243(null),
    ).toEqual(DAFF_EXTERNAL_ROUTER_NOT_FOUND_RESOLUTION);
  });
});
