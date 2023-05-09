import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DaffMenuActivatorDirective } from './menu/menu-activator/menu-activator.component';
import { DaffMenuComponent } from './menu/menu.component';
import { DaffMenuService } from './menu/menu.service';

@NgModule({
  imports: [
    CommonModule,
    OverlayModule,
  ],
  declarations: [
    DaffMenuActivatorDirective,
    DaffMenuComponent,
  ],
  exports: [
    DaffMenuActivatorDirective,
    DaffMenuComponent,
  ],
  providers: [
    DaffMenuService,
  ],
})

export class DaffMenuModule {}
