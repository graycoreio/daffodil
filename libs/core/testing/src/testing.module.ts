import { NgModule } from '@angular/core';

import { DaffMockCurrencyPipe } from './angular/mocks/pipes/currency';

/**
 * @deprecated in favor of importing the standalone {@link DaffMockCurrencyPipe} Deprecated in version 0.95.0. Will be removed in version 0.98.0.
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
