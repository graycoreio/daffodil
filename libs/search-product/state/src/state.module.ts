import { NgModule } from '@angular/core';

import { DaffSearchProductStateCoreModule } from './core.module';

/**
 * @deprecated in favor of {@link provideDaffSearchProductState}
 */
@NgModule({
  imports: [
    DaffSearchProductStateCoreModule,
  ],
})
export class DaffSearchProductStateModule {
}
