import { NgModule } from '@angular/core';
import { DaffButtonModule, DaffCheckboxModule } from '@daffodil/design';

import { BasicCheckboxComponent } from './basic-checkbox.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
    declarations: [
        BasicCheckboxComponent
    ],
    exports: [
        BasicCheckboxComponent
    ],
    imports: [
        DaffCheckboxModule,
        DaffButtonModule,
        ReactiveFormsModule
    ],
    providers: []
})
export class BasicCheckboxModule { }