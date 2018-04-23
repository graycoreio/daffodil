import { Injectable } from '@angular/core';

import { ProductTestingService } from '../../product/testing/services/product.testing.service';

import { InMemoryDbService } from 'angular-in-memory-web-api';
import { ProductFactory } from '../../product/testing/factories/product.factory';
import { Product } from '../../product/model/product';

@Injectable()
export class MockService implements InMemoryDbService{
  constructor(private productTestingService: ProductTestingService) {}

  createDb() : MockDatabase{
    return {
      ...this.productTestingService.createDb()
    };
  }
}

export interface MockDatabase {
  products: Product[]
}
