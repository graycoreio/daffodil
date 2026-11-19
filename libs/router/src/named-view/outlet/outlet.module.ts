import { NgModule } from '@angular/core';

import { DaffRouterNamedViewOutletDirective } from './outlet.directive';

/**
 * @deprecated in favor of importing the standalone {@link DaffRouterNamedViewOutletDirective} Deprecated in version 0.95.0. Will be removed in version 0.98.0.
 */
@NgModule({
  imports: [
    DaffRouterNamedViewOutletDirective,
  ],
  exports: [
    DaffRouterNamedViewOutletDirective,
  ],
})
export class DaffRouterNamedViewOutletModule {}
