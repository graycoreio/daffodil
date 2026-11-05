import { NgModule } from '@angular/core';

import { DaffMockCurrencyPipe } from './angular/mocks/pipes/currency';

/**
 * @deprecated in favor of importing the standalone {@link DaffMockCurrencyPipe}
 */
@NgModule({
  imports: [
    DaffMockCurrencyPipe,
  ],
  exports: [
    DaffMockCurrencyPipe,
  ],
})
export class DaffCoreTestingModule {}
