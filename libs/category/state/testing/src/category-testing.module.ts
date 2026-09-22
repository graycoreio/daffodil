import { NgModule } from '@angular/core';

import { provideDaffCategoryStateTesting } from './provider';

/**
 * A module that mocks out the {@link DaffCategoryFacade} with {@link MockDaffCategoryFacade} for testing environments.
 *
 * @deprecated in favor of {@link provideDaffCategoryStateTesting}
 */
@NgModule({
  providers: [
    provideDaffCategoryStateTesting(),
  ],
})
export class DaffCategoryStateTestingModule { }
