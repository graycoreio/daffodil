import { NgModule } from '@angular/core';

import { DaffBreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { DaffBreadcrumbItemComponent } from './breadcrumb-item/breadcrumb-item.component';

/**
 * @deprecated in favor of {@link DAFF_BREADCRUMB_COMPONENTS}. Deprecated in version 0.78.0. Will be removed in version 1.0.0.
 */
@NgModule({
  imports: [
    DaffBreadcrumbComponent,
    DaffBreadcrumbItemComponent,
  ],
  exports: [
    DaffBreadcrumbComponent,
    DaffBreadcrumbItemComponent,
  ],
})
export class DaffBreadcrumbModule { }
