import { cartItemResponseFactory } from "./cart-item-response";
import { cartItemTotalsResponseFactory } from "./cart-item-totals-response";

export function cartItemFactory () {
  return {
    ...cartItemResponseFactory(),
    ...cartItemTotalsResponseFactory()
  }
}
