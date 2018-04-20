import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ProductTestingService } from '@daffodil/product/testing/services/product.testing.service';
import { ProductFactory } from '@daffodil/product/testing/factories/product.factory';
import { ProductService } from '@daffodil/product/services/product.service';
import { DaffodilConfigService } from '@daffodil/config/daffodil-config.service';

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
