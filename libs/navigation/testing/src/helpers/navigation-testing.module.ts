import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MockDaffNavigationFacade } from './mocks/mock-navigation.facade';
import { DaffNavigationFacade } from '@daffodil/navigation';

/**
 * The DaffNavigationTestingModule provides a mock for the DaffNavigationFacade. This makes testing much simpler
 * by removing any interaction with the ngrx store.
 */
@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    { provide: DaffNavigationFacade, useClass: MockDaffNavigationFacade }
  ]
})
export class DaffNavigationTestingModule { }
