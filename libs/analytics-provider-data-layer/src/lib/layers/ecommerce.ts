import { EcommerceDataLayerAddToCart } from './ecommerce/add_to_cart';
import { DaffDataLayerCartPageView } from './ecommerce/cart-pageview';
import { EcommerceDataLayerCheckoutStep } from './ecommerce/checkout_step';
import { EcommerceDataLayerProductClick } from './ecommerce/click';
import { EcommerceDataLayerDetailView } from './ecommerce/detail_view';
import { EcommerceDataLayerImpression } from './ecommerce/impression';
import { EcommerceDataLayerNull } from './ecommerce/null';
import { EcommerceDataLayerPurchase } from './ecommerce/purchase';
import { EcommerceDataLayerRemoveFromCart } from './ecommerce/remove_from_cart';

export type EcommerceDataLayer =
  EcommerceDataLayerImpression |
  EcommerceDataLayerProductClick |
  EcommerceDataLayerDetailView |
  EcommerceDataLayerAddToCart |
  EcommerceDataLayerRemoveFromCart |
  DaffDataLayerCartPageView |
  EcommerceDataLayerCheckoutStep |
  EcommerceDataLayerPurchase |
  EcommerceDataLayerNull;
