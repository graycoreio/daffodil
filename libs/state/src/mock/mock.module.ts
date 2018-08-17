import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { CartTestingModule } from '../cart/testing/cart-testing.module';
import { MockService } from '../mock/services/mock.service';
import { ProductTestingModule } from '../product/testing/product-testing.module';

@NgModule({
  imports: [
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(MockService),

    ProductTestingModule,
    CartTestingModule
  ]
})
export class MockModule { }
