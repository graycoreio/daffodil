import {
  Injectable,
  Inject,
} from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';
import {
  STATUS,
  RequestInfo,
  ResponseOptions,
} from 'angular-in-memory-web-api';

import { DaffCart } from '@daffodil/cart';
import { DaffCartFactory } from '@daffodil/cart/testing';
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
export class DaffInMemoryBackendCartService implements DaffInMemoryDataServiceInterface {
  constructor(
    private cartFactory: DaffCartFactory,
    @Inject(DAFF_CART_IN_MEMORY_EXTRA_ATTRIBUTES_HOOK) private extraFieldsHook: DaffCartInMemoryExtraAttributesHook,
    private productBackend: DaffInMemoryBackendProductService,
  ) {}

  get(reqInfo: RequestInfo) {
    return reqInfo.utils.createResponse$(() => this.getCart(reqInfo));
  }

  post(reqInfo: RequestInfo) {
    return reqInfo.utils.createResponse$(() => {
      let ret;
      const action = this.getAction(reqInfo);

      if (reqInfo.id === 'addToCart') {
        // deprecated
        ret = {
          body: {},
          status: STATUS.OK,
        };
      } else if (action === 'clear') {
        ret = this.clear(reqInfo);
      } else if (action === 'merge') {
        ret = this.merge(reqInfo);
      } else {
        ret = this.create(reqInfo);
      }

      return ret;
    });
  }

  /**
   * Gets whatever follows the cart ID section of the request URL.
   */
  private getAction(reqInfo: RequestInfo): string {
    return reqInfo.url.replace(`/${reqInfo.resourceUrl}${reqInfo.id}/`, '');
  }

  private clear(reqInfo: RequestInfo): ResponseOptions {
    const cart = (<DaffCart>this.getCart(reqInfo).body);

    cart.items = [];

    return {
      body: {
        ...cart,
        extra_attributes: this.extraFieldsHook(reqInfo, cart),
      },
      status: STATUS.OK,
    };
  }

  private create(reqInfo: RequestInfo): ResponseOptions {
    const cart = this.cartFactory.create();

    reqInfo.collection.push(cart);

    return {
      body:{
        id: cart.id,
      },
      status: STATUS.OK,
    };
  }

  private merge(reqInfo: RequestInfo): ResponseOptions {
    const {
      source,
      destination,
    } = reqInfo.utils.getJsonBody(reqInfo.req);
    const sourceCart = reqInfo.utils.findById<DaffCart>(reqInfo.collection, source);

    if (!sourceCart) {
      return {
        status: STATUS.NOT_FOUND,
      };
    }

    const destinationCart = reqInfo.utils.findById<DaffCart>(reqInfo.collection, destination ? destination : (<{id: DaffCart['id']}>this.create(reqInfo).body).id);

    if (!destinationCart) {
      return {
        status: STATUS.NOT_FOUND,
      };
    }

    destinationCart.items.push(...sourceCart.items);
    reqInfo.collection.push(destinationCart);

    return {
      body: {
        ...destinationCart,
        extra_attributes: this.extraFieldsHook(reqInfo, destinationCart),
      },
      status: STATUS.OK,
    };
  }

  private getCart(reqInfo: RequestInfo): ResponseOptions {
    const cart = reqInfo.utils.findById<DaffCart>(reqInfo.collection, reqInfo.id);

    return cart
      ? {
        body: {
          ...daffCartInMemoryComputeCartTotals(cart, this.productBackend.products),
          extra_attributes: this.extraFieldsHook(reqInfo, <DaffCart>cart),
        },
        status: STATUS.OK,
      }
      : {
        status: STATUS.NOT_FOUND,
      };
  }
}
