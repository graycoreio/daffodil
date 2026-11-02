import { NgModule } from '@angular/core';

import { provideDaffAuthorizeNetStateTesting } from './provider';

/**
 * @deprecated in favor of {@link provideDaffAuthorizeNetStateTesting}
 */
@NgModule({
  providers: [
    provideDaffAuthorizeNetStateTesting(),
  ],
})
export class DaffAuthorizeNetStateTestingModule {}
