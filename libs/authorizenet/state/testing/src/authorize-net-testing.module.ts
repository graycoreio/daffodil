import { NgModule } from '@angular/core';

import { provideDaffAuthorizeNetStateTesting } from './provider';

/**
 * @deprecated in favor of {@link provideDaffAuthorizeNetStateTesting} Deprecated in version 0.95.0. Will be removed in version 0.98.0.
 */
@NgModule({
  providers: [
    provideDaffAuthorizeNetStateTesting(),
  ],
})
export class DaffAuthorizeNetStateTestingModule {}
