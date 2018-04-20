import { Injectable } from '@angular/core';

import { ProductTestingService } from '@daffodil/product/testing/services/product.testing.service';

import { InMemoryDbService } from 'angular-in-memory-web-api';
import { ProductFactory } from '@daffodil/product/testing/factories/product.factory';

@Injectable()
export class MockService implements InMemoryDbService{
  constructor(private productTestingService: ProductTestingService) {}

  createDb() {
    return {
      ...this.productTestingService.createDb()
    };
  }
}
