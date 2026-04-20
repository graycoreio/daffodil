import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DaffLinkSetComponent } from './link-set/link-set.component';
import { DaffLinkSetHeadingDirective } from './link-set-heading/link-set-heading.directive';
import { DaffLinkSetItemComponent } from './link-set-item/link-set-item.component';
import { DaffLinkSetSubheadingDirective } from './link-set-subheading/link-set-subheading.directive';

/**
 * @deprecated Deprecated in version 0.92.0. Will be removed in version 0.95.0.
 */
@NgModule({
  imports: [
    CommonModule,
    DaffLinkSetComponent,
    DaffLinkSetHeadingDirective,
    DaffLinkSetSubheadingDirective,
    DaffLinkSetItemComponent,
  ],
  exports: [
    DaffLinkSetComponent,
    DaffLinkSetHeadingDirective,
    DaffLinkSetSubheadingDirective,
    DaffLinkSetItemComponent,
  ],
})
export class DaffLinkSetModule {}
