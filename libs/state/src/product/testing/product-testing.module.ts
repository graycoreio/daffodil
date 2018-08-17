import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { ProductFactory } from '@daffodil/core';

import { ProductService } from '../services/product.service';
import { ProductTestingService } from '../testing/services/product.testing.service';

@NgModule({
  imports: [
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forFeature(ProductTestingService, {
      delay: 500
    })
  ],
  providers: [
    ProductFactory,
    ProductService,
    ProductTestingService
  ]
})
export class ProductTestingModule { }
