import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { CartTestingService } from '../testing/services/cart.testing.service';
import { CartFactory } from '../testing/factories/cart.factory';
import { CartService } from '../services/cart.service';
import { DaffodilConfigService } from '../../config/daffodil-config.service';

@NgModule({
  imports: [
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forFeature(CartTestingService, {
      delay: 500
    })
  ],
  providers: [
    CartFactory,
    CartService,
    CartTestingService
  ]
})
export class CartTestingModule { }
