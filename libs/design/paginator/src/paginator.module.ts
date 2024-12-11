import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { DaffPaginatorComponent } from './paginator/paginator.component';

/**
 * @deprecated in favor of {@link DAFF_PAGINATOR_COMPONENTS}. Deprecated in version 0.78.0. Will be removed in version 1.0.0.
 */
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule,
    DaffPaginatorComponent,
  ],
  exports: [
    DaffPaginatorComponent,
  ],
})
export class DaffPaginatorModule {}
