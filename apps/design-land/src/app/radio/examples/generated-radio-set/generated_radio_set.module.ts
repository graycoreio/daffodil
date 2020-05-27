import { DaffRadioModule } from '@daffodil/design';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { GeneratedRadioSetComponent } from './generated_radio_set.component';
import { CommonModule } from '@angular/common';

@NgModule({

    declarations: [
        GeneratedRadioSetComponent
    ],
    exports: [
        GeneratedRadioSetComponent
    ],
    imports: [
        DaffRadioModule,
        ReactiveFormsModule,
        CommonModule
    ],
    providers: []
})
export class GeneratedRadioSetModule { }