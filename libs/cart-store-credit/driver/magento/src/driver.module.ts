import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import {
  provideDaffCartMagentoCartTransforms,
  provideDaffCartMagentoExtraCartFragments,
} from '@daffodil/cart/driver/magento';
import { provideDaffCartStoreCreditDriver } from '@daffodil/cart-store-credit/driver';

import { magentoCartStoreCreditFragment } from './queries/public_api';
import { DaffCartStoreCreditMagentoService } from './store-credit.service';
import { magentoCartWithStoreCreditTransform } from './transforms/public_api';

@NgModule({
  imports: [
    CommonModule,
  ],
})
export class DaffCartStoreCreditMagentoDriverModule {
  static forRoot(): ModuleWithProviders<DaffCartStoreCreditMagentoDriverModule> {
    return {
      ngModule: DaffCartStoreCreditMagentoDriverModule,
      providers: [
        provideDaffCartStoreCreditDriver(DaffCartStoreCreditMagentoService),
        provideDaffCartMagentoExtraCartFragments(magentoCartStoreCreditFragment),
        provideDaffCartMagentoCartTransforms(
          magentoCartWithStoreCreditTransform,
        ),
      ],
    };
  }
}
