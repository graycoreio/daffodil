import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DaffMenuComponent } from './menu/menu.component';
import { DaffMenuActivatorDirective } from './menu-activator/menu-activator.component';
import { DaffMenuItemComponent } from './menu-item/menu-item.component';
import { DaffMenuService } from './services/menu.service';

@NgModule({
  imports: [
    CommonModule,
    OverlayModule,
    DaffMenuActivatorDirective,
    DaffMenuComponent,
    DaffMenuItemComponent,
  ],
  exports: [
    DaffMenuActivatorDirective,
    DaffMenuComponent,
    DaffMenuItemComponent,
  ],
  providers: [
    DaffMenuService,
  ],
})

export class DaffMenuModule {}
