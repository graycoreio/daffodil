import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { DaffButtonModule } from '@daffodil/design';

import { DaffodilThemeSwitchComponent } from './theme-switch.component';

@NgModule({
  declarations: [
    DaffodilThemeSwitchComponent,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    DaffButtonModule,
  ],
  exports: [
    DaffodilThemeSwitchComponent,
  ],
})
export class DaffodilThemeSwitchModule { }
