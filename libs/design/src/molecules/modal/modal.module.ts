import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DaffBackdropModule } from '../backdrop/backdrop.module';
import { DaffModalComponent } from './modal/modal.component';
import { PortalModule } from '@angular/cdk/portal';


@NgModule({
  imports: [
    CommonModule,
    PortalModule,
    DaffBackdropModule
  ],
  declarations: [
    DaffModalComponent
  ],
  entryComponents: [
    DaffModalComponent
  ]
})
export class DaffModalModule { }
