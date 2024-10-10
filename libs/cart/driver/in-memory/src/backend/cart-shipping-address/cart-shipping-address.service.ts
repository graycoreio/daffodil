import {
  Injectable,
  Inject,
} from '@angular/core';
import {
  STATUS,
  RequestInfo,
} from 'angular-in-memory-web-api';

import {
  DaffCart,
  DaffCartAddress,
} from '@daffodil/cart';
import { DaffInMemorySingleRouteableBackend } from '@daffodil/driver/in-memory';

import { DAFF_CART_IN_MEMORY_CART_SHIPPING_ADDRESS_COLLECTION_NAME } from '../../collection-names';
import {
  DAFF_CART_IN_MEMORY_EXTRA_ATTRIBUTES_HOOK,
  DaffCartInMemoryExtraAttributesHook,
} from '../../injection-tokens/public_api';

/**
 * @inheritdoc
 */
@Injectable({
  providedIn: 'root',
})
export class DaffInMemoryBackendCartShippingAddressService implements DaffInMemorySingleRouteableBackend {
  readonly collectionName = DAFF_CART_IN_MEMORY_CART_SHIPPING_ADDRESS_COLLECTION_NAME;

  constructor(
    @Inject(DAFF_CART_IN_MEMORY_EXTRA_ATTRIBUTES_HOOK) private extraFieldsHook: DaffCartInMemoryExtraAttributesHook,
  ) {}

  get(reqInfo: RequestInfo) {
    return reqInfo.utils.createResponse$(() => ({
      body: this.getShippingAddress(reqInfo),
      status: STATUS.OK,
    }));
  }

  put(reqInfo: RequestInfo) {
    return reqInfo.utils.createResponse$(() => ({
      body: this.updateShippingAddress(reqInfo),
      status: STATUS.OK,
    }));
  }

  private getCart(reqInfo: RequestInfo): DaffCart {
    return reqInfo.utils.findById<DaffCart>(reqInfo.collection, reqInfo.id);
  }

  private getShippingAddress(reqInfo): DaffCartAddress {
    return this.getCart(reqInfo).shipping_address;
  }

  private updateShippingAddress(reqInfo: RequestInfo): DaffCart {
    const cart = this.getCart(reqInfo);
    const address = reqInfo.utils.getJsonBody(reqInfo.req);

    cart.shipping_address = address;

    return {
      ...cart,
      extra_attributes: this.extraFieldsHook(reqInfo, cart),
    };
  }
}
