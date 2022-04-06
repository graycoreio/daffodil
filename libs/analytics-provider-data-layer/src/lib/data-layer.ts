import { EcommerceDataLayer } from './layers/ecommerce';
import { VirtualPageViewDataLayer } from './layers/pageview';

export type DataLayerItem = EcommerceDataLayer | VirtualPageViewDataLayer | null;

/**
 * The data layer.
 *
 * @see https://developers.google.com/analytics/devguides/collection/ua/gtm/enhanced-ecommerce#data-layer
 */
export type DataLayer = DataLayerItem[];
