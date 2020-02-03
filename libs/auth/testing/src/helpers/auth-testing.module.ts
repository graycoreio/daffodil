import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MockDaffAuthFacade } from './mocks/mock-auth.facade';
import { DaffAuthFacade } from '@daffodil/auth';

/**
 * The DaffAuthTestingModule provides a mock for the DaffAuthFacade. This makes testing much simpler
 * by removing any interaction with the ngrx store.
 */
@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    { provide: DaffAuthFacade, useClass: MockDaffAuthFacade }
  ]
})
export class DaffAuthTestingModule { }
