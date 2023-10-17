import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DaffBackdropComponent } from './backdrop/backdrop.component';

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        DaffBackdropComponent,
    ],
    exports: [
        DaffBackdropComponent,
    ]
})
export class DaffBackdropModule { }
