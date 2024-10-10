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
  DaffCartPaymentMethod,
} from '@daffodil/cart';
import { DaffInMemorySingleRouteableBackend } from '@daffodil/driver/in-memory';

import { DAFF_CART_IN_MEMORY_CART_PAYMENT_COLLECTION_NAME } from '../../collection-names';
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
export class DaffInMemoryBackendCartPaymentService implements DaffInMemorySingleRouteableBackend {
  readonly collectionName = DAFF_CART_IN_MEMORY_CART_PAYMENT_COLLECTION_NAME;

  constructor(
    @Inject(DAFF_CART_IN_MEMORY_EXTRA_ATTRIBUTES_HOOK) private extraFieldsHook: DaffCartInMemoryExtraAttributesHook,
  ) {}

  get(reqInfo: RequestInfo) {
    return reqInfo.utils.createResponse$(() => ({
      body: this.getPayment(reqInfo),
      status: STATUS.OK,
    }));
  }

  put(reqInfo: RequestInfo) {
    return reqInfo.utils.createResponse$(() => ({
      body: this.updatePayment(reqInfo),
      status: STATUS.OK,
    }));
  }

  delete(reqInfo: RequestInfo) {
    return reqInfo.utils.createResponse$(() => ({
      body: this.removePayment(reqInfo),
      status: STATUS.OK,
    }));
  }

  private getCart(reqInfo: RequestInfo): DaffCart {
    return reqInfo.utils.findById<DaffCart>(reqInfo.collection, reqInfo.id);
  }

  private getPayment(reqInfo): DaffCartPaymentMethod {
    return this.getCart(reqInfo).payment;
  }

  private updatePayment(reqInfo: RequestInfo): DaffCart {
    const cart = this.getCart(reqInfo);
    const { payment, address } = reqInfo.utils.getJsonBody(reqInfo.req);

    cart.payment = payment;

    if (address) {
      cart.billing_address = address;
    }

    return {
      ...cart,
      extra_attributes: this.extraFieldsHook(reqInfo, cart),
    };
  }

  private removePayment(reqInfo: RequestInfo): DaffCart {
    const cart = this.getCart(reqInfo);

    cart.payment = null;

    return {
      ...cart,
      extra_attributes: this.extraFieldsHook(reqInfo, cart),
    };
  }
}
