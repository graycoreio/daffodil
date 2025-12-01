import {
  EnvironmentProviders,
  makeEnvironmentProviders,
  Provider,
} from '@angular/core';

import {
  provideDaffContentDriver,
  provideDaffContentHtmlPageDriver,
} from '@daffodil/content/driver';
import { provideManyDaffMagentoCacheableOperations } from '@daffodil/driver/magento';

import { MagentoContentPageService } from './page.service';
import {
  MAGENTO_CONTENT_GET_BLOCKS_QUERY_NAME,
  MAGENTO_CONTENT_GET_PAGE_QUERY_NAME,
} from './public_api';
import { MagentoContentService } from './service';

/**
 * Provides the Magento driver for the content feature.
 */
export const provideDaffContentMagentoDriver = (): Provider | EnvironmentProviders => [
  provideDaffContentDriver(MagentoContentService),
  provideDaffContentHtmlPageDriver(MagentoContentPageService),
  makeEnvironmentProviders(provideManyDaffMagentoCacheableOperations(MAGENTO_CONTENT_GET_BLOCKS_QUERY_NAME, MAGENTO_CONTENT_GET_PAGE_QUERY_NAME)),
];
