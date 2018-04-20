import { NgModule } from '@angular/core';

import { CoreProductModule } from '@daffodil/product/product.module';
import { HttpClientModule } from '@angular/common/http';
import { MockService } from '@daffodil/mock/services/mock.service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ProductTestingModule } from '@daffodil/product/testing/product-testing.module';

@NgModule({
  imports: [
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(MockService),

    ProductTestingModule,
  ]
})
export class MockModule { }
