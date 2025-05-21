import { DaffEcommerceDataLayer } from './layers/ecommerce';
import { DaffVirtualPageViewDataLayer } from './layers/pageview';

export type DaffDataLayerItem = DaffEcommerceDataLayer | DaffVirtualPageViewDataLayer | null;

/**
 * The data layer.
 *
 * @see https://developers.google.com/analytics/devguides/collection/ua/gtm/enhanced-ecommerce#data-layer
 */
export type DaffDataLayer = DaffDataLayerItem[];
