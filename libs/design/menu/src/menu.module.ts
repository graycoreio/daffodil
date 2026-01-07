import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DaffPrefixDirective } from '@daffodil/design';

import { DaffMenuComponent } from './menu/menu.component';
import { DaffMenuActivatorDirective } from './menu-activator/menu-activator.component';
import { DaffMenuItemComponent } from './menu-item/menu-item.component';
import { DaffMenuService } from './services/menu.service';

/**
 * @deprecated in favor of {@link DAFF_MENU_COMPONENTS}
 */
@NgModule({
  imports: [
    CommonModule,
    OverlayModule,
    DaffMenuActivatorDirective,
    DaffMenuComponent,
    DaffMenuItemComponent,
    DaffPrefixDirective,
  ],
  exports: [
    DaffMenuActivatorDirective,
    DaffMenuComponent,
    DaffMenuItemComponent,
    DaffPrefixDirective,
  ],
  providers: [
    DaffMenuService,
  ],
})

export class DaffMenuModule {}
