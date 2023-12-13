import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { DaffNavbarModule } from '@daffodil/design';
import { DaffButtonModule } from '@daffodil/design/button';

import { NavbarThemingComponent } from './navbar-theming.component';

@NgModule({
  declarations: [
    NavbarThemingComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DaffNavbarModule,
    DaffButtonModule,
  ],
})
export class NavbarThemingModule { }
