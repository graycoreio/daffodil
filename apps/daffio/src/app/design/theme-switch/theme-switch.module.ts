import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { DaffButtonModule } from '@daffodil/design';

import { DaffioThemeSwitchComponent } from './theme-switch.component';

@NgModule({
  declarations: [
    DaffioThemeSwitchComponent,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    DaffButtonModule,
  ],
  exports: [
    DaffioThemeSwitchComponent,
  ],
})
export class DaffThemeSwitchModule { }
