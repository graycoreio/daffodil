import { NgModule } from '@angular/core';

import { DaffSearchProductStateCoreModule } from './core.module';

/**
 * @deprecated in favor of {@link provideDaffSearchProductState} Deprecated in version 0.95.0. Will be removed in version 0.98.0.
 */
@NgModule({
  imports: [
    DaffSearchProductStateCoreModule,
  ],
})
export class DaffSearchProductStateModule {
}
