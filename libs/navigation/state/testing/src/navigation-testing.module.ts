import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DaffNavigationFacade } from '@daffodil/navigation/state';

import { MockDaffNavigationFacade } from './mock-navigation.facade';

/**
 * The DaffNavigationTestingModule provides a mock for the DaffNavigationFacade. This makes testing much simpler
 * by removing any interaction with the ngrx store.
 */
@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    { provide: DaffNavigationFacade, useExisting: MockDaffNavigationFacade }
  ]
})
export class DaffNavigationTestingModule {}
