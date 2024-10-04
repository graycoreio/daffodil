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
  DaffCartShippingRate,
} from '@daffodil/cart';
import { DaffInMemoryDataServiceInterface } from '@daffodil/driver/in-memory';
import { DaffInMemoryBackendProductService } from '@daffodil/product/driver/in-memory';

import { daffCartInMemoryComputeCartTotals } from '../../helpers/compute-cart-totals';
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
export class DaffInMemoryBackendCartShippingInformationService implements DaffInMemoryDataServiceInterface {
  constructor(
    @Inject(DAFF_CART_IN_MEMORY_EXTRA_ATTRIBUTES_HOOK) private extraFieldsHook: DaffCartInMemoryExtraAttributesHook,
    private productBackend: DaffInMemoryBackendProductService,
  ) {}

  get(reqInfo: RequestInfo) {
    return reqInfo.utils.createResponse$(() => ({
      body: this.getShippingInformation(reqInfo),
      status: STATUS.OK,
    }));
  }

  put(reqInfo: RequestInfo) {
    return reqInfo.utils.createResponse$(() => ({
      body: this.updateShippingInformation(reqInfo),
      status: STATUS.OK,
    }));
  }

  delete(reqInfo: RequestInfo) {
    return reqInfo.utils.createResponse$(() => ({
      body: this.removeShippingInformation(reqInfo),
      status: STATUS.OK,
    }));
  }

  private getCart(reqInfo: RequestInfo): DaffCart {
    return reqInfo.utils.findById<DaffCart>(reqInfo.collection, reqInfo.id);
  }

  private getShippingInformation(reqInfo): DaffCartShippingRate {
    return this.getCart(reqInfo).shipping_information;
  }

  private updateShippingInformation(reqInfo: RequestInfo): DaffCart {
    const cart = this.getCart(reqInfo);
    const shippingInformation = reqInfo.utils.getJsonBody(reqInfo.req);

    cart.shipping_information = shippingInformation;

    return {
      ...daffCartInMemoryComputeCartTotals(cart, this.productBackend.products),
      extra_attributes: this.extraFieldsHook(reqInfo, cart),
    };
  }

  private removeShippingInformation(reqInfo: RequestInfo): DaffCart {
    const cart = this.getCart(reqInfo);

    cart.shipping_information = null;

    return {
      ...daffCartInMemoryComputeCartTotals(cart, this.productBackend.products),
      extra_attributes: this.extraFieldsHook(reqInfo, cart),
    };
  }
}
