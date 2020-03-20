import { MagentoCartGraphQlErrorCode } from "./codes";
import { DaffErrorCodeMap } from "@daffodil/core";
import { DaffCartNotFoundError } from "libs/cart/src/errors/not-found";

export const DaffCartMagentoErrorMap: DaffErrorCodeMap = {
  [MagentoCartGraphQlErrorCode.CART_NOT_FOUND]: DaffCartNotFoundError
}