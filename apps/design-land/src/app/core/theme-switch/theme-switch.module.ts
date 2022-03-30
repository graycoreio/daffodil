import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { DaffButtonModule } from '@daffodil/design';

import { DesignLandThemeSwitchComponent } from './theme-switch.component';

@NgModule({
  declarations: [
    DesignLandThemeSwitchComponent,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    DaffButtonModule,
  ],
  exports: [
    DesignLandThemeSwitchComponent,
  ],
})
export class DesignLandThemeSwitchModule { }
