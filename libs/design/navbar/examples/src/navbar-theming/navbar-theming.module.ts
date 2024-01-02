import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { DaffButtonModule } from '@daffodil/design/button';
import { DaffNavbarModule } from '@daffodil/design/navbar';

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
