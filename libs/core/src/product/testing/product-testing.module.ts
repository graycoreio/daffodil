import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ProductTestingService } from '../testing/services/product.testing.service';
import { ProductFactory } from '../testing/factories/product.factory';
import { ProductService } from '../services/product.service';
import { DaffodilConfigService } from '../../config/daffodil-config.service';

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
