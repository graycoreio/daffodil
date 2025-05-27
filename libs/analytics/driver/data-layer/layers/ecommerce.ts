import { DaffEcommerceDataLayerAddToCart } from './ecommerce/add_to_cart';
import { DaffDataLayerCartPageView } from './ecommerce/cart-pageview';
import { DaffEcommerceDataLayerCheckoutStep } from './ecommerce/checkout_step';
import { DaffEcommerceDataLayerProductClick } from './ecommerce/click';
import { DaffEcommerceDataLayerDetailView } from './ecommerce/detail_view';
import { DaffEcommerceDataLayerImpression } from './ecommerce/impression';
import { DaffEcommerceDataLayerNull } from './ecommerce/null';
import { DaffEcommerceDataLayerPurchase } from './ecommerce/purchase';
import { DaffEcommerceDataLayerRemoveFromCart } from './ecommerce/remove_from_cart';

export type DaffEcommerceDataLayer =
  DaffEcommerceDataLayerImpression |
  DaffEcommerceDataLayerProductClick |
  DaffEcommerceDataLayerDetailView |
  DaffEcommerceDataLayerAddToCart |
  DaffEcommerceDataLayerRemoveFromCart |
  DaffDataLayerCartPageView |
  DaffEcommerceDataLayerCheckoutStep |
  DaffEcommerceDataLayerPurchase |
  DaffEcommerceDataLayerNull;
