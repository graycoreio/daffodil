import {
  DaffCartNotFoundError,
  DaffCartDriverErrorCodes,
  DaffUnauthorizedForCartError,
  DaffProductOutOfStockError,
  DaffCartInvalidAPIResponseError,
} from '@daffodil/cart/driver';
import { DaffErrorCodeMap } from '@daffodil/core';
import { DaffBadInputError } from '@daffodil/driver';
import { DaffProductNotFoundError } from '@daffodil/product/driver';

import { MagentoCartGraphQlErrorCode } from './codes';
import { MagentoCartUserInputErrorType } from '../models/public_api';

export const DaffCartMagentoErrorMap: DaffErrorCodeMap = {
  [MagentoCartGraphQlErrorCode.CART_NOT_FOUND]: DaffCartNotFoundError,
  [MagentoCartGraphQlErrorCode.BAD_INPUT]: DaffBadInputError,
  [MagentoCartGraphQlErrorCode.AUTHORIZATION]: DaffUnauthorizedForCartError,
};

export const DaffCartMagentoErrorMessageRegexMap = {
  [DaffCartDriverErrorCodes.INVALID_COUPON_CODE]: /The coupon code isn\'t valid/,
  [DaffCartDriverErrorCodes.PRODUCT_OUT_OF_STOCK]: /(The requested qty is not available)|(This product is out of stock)|(Some of the products are out of stock)|(There are no source items with the in stock status)/,
  [DaffCartDriverErrorCodes.ITEM_EXCEEDS_MAX_QTY]: /The requested qty exceeds the maximum qty allowed in shopping cart/,
  [DaffCartDriverErrorCodes.INVALID_EMAIL]: /Invalid email format/,
  [DaffCartDriverErrorCodes.CART_NOT_FOUND]: /Could not find a cart with ID/,
  [DaffCartDriverErrorCodes.UNAUTHORIZED_FOR_CART]: /The current customer isn\'t authorized/,
};

export const DaffCartMagentoUserErrorMap: DaffErrorCodeMap = {
  [MagentoCartUserInputErrorType.PRODUCT_NOT_FOUND]: DaffProductNotFoundError,
  [MagentoCartUserInputErrorType.INSUFFICIENT_STOCK]: DaffProductOutOfStockError,
  [MagentoCartUserInputErrorType.NOT_SALABLE]: DaffProductOutOfStockError,
  [MagentoCartUserInputErrorType.UNDEFINED]: DaffCartInvalidAPIResponseError,
};
