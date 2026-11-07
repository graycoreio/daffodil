import { NgModule } from '@angular/core';

import { provideDaffCategoryStateTesting } from './provider';

/**
 * A module that mocks out the {@link DaffCategoryFacade} with {@link MockDaffCategoryFacade} for testing environments.
 *
 * @deprecated in favor of {@link provideDaffCategoryStateTesting} Deprecated in version 0.95.0. Will be removed in version 0.98.0.
 */
@NgModule({
  providers: [
    provideDaffCategoryStateTesting(),
  ],
})
export class DaffCategoryStateTestingModule { }
