import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { provideDaffNavigationStateTesting } from './provider';

/**
 * The DaffNavigationStateTestingModule provides a mock for the DaffNavigationFacade. This makes testing much simpler
 * by removing any interaction with the ngrx store.
 *
 * @deprecated in favor of {@link provideDaffNavigationStateTesting} Deprecated in version 0.95.0. Will be removed in version 0.98.0.
 */
@NgModule({
  imports: [
    CommonModule,
  ],
  providers: [
    provideDaffNavigationStateTesting(),
  ],
})
export class DaffNavigationStateTestingModule {}
