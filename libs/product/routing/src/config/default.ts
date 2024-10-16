import {
  inject,
  InjectionToken,
} from '@angular/core';

import {
  DaffBase64Service,
  DaffBase64ServiceToken,
} from '@daffodil/core';

import { DaffProductRoutingConfig } from './interface';

export const DAFF_PRODUCT_ROUTING_QUERY_PARAM_REQUEST_MAP: DaffProductRoutingConfig['params'] = {
  filterRequests: 'filters',
  appliedSortOption: 'sortOption',
  appliedSortDirection: 'sortDir',
  currentPage: 'page',
  pageSize: 'size',
};

/**
 * The default configuration for the {@link DaffProductRoutingConfig}.
 */
export const daffProductRoutingConfigDefaultFactory = (base64: DaffBase64Service): DaffProductRoutingConfig => ({
  params: DAFF_PRODUCT_ROUTING_QUERY_PARAM_REQUEST_MAP,
  transforms: {
    pageSize: {
      request: str => Number(str),
      queryParam: pageSize => String(pageSize),
    },
    currentPage: {
      request: str => Number(str),
      queryParam: currentPage => String(currentPage),
    },
    filterRequests: {
      request: base64Str => JSON.parse(base64.decode(base64Str)),
      queryParam: filterRequests => base64.encode(JSON.stringify(filterRequests)),
    },
  },
});

export const DAFF_PRODUCT_ROUTING_CONFIG_DEFAULT = new InjectionToken<DaffProductRoutingConfig>(
  'DAFF_PRODUCT_ROUTING_CONFIG_DEFAULT',
  { factory: () => daffProductRoutingConfigDefaultFactory(inject(DaffBase64ServiceToken)) },
);
