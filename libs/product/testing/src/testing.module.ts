import { NgModule } from '@angular/core';

import { DaffDefaultProductFactory } from './factories/public_api';
import { DAFF_PRODUCT_TYPE_FACTORIES } from './injection-tokens/public_api';

@NgModule({
  providers: [
    {
      provide: DAFF_PRODUCT_TYPE_FACTORIES,
      useExisting: DaffDefaultProductFactory,
      multi: true,
    },
  ],
})
export class DaffProductTestingModule { }
