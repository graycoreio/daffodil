import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { ProductTestingModule } from '../product/testing/product-testing.module';
import { CartTestingModule } from '../cart/testing/cart-testing.module';

import { MockService } from '../mock/services/mock.service';

@NgModule({
  imports: [
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(MockService),

    ProductTestingModule,
    CartTestingModule
  ]
})
export class MockModule { }
