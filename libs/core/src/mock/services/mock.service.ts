import { Injectable } from '@angular/core';

import { ProductTestingService } from '../../product/testing/services/product.testing.service';

import { InMemoryDbService } from 'angular-in-memory-web-api';
import { ProductFactory } from '../../product/testing/factories/product.factory';
import { Product } from '../../product/model/product';
import { CartTestingService } from '../../cart/testing/services/cart.testing.service';
import { Cart } from '../../cart/model/cart';

@Injectable()
export class MockService implements InMemoryDbService{
  constructor(
    private productTestingService: ProductTestingService,
    private cartTestingService: CartTestingService
  ) {}

  createDb() : MockDatabase {
    return {
      ...this.productTestingService.createDb(),
      ...this.cartTestingService.createDb()
    };
  }
}

export interface MockDatabase {
  products: Product[],
  cart: Cart
}
