import { NgModule } from '@angular/core';


import { DaffCheckboxComponent } from './checkbox.component';
import { DaffCheckboxSetComponent } from '../checkbox-set/checkbox-set.component';
import { DaffCheckboxControlValueAccessorDirective } from './cva/checkbox-cva.directive';
import { CommonModule } from '@angular/common';

@NgModule({
    exports: [
        DaffCheckboxComponent,
        DaffCheckboxSetComponent,
        DaffCheckboxControlValueAccessorDirective
    ],
    declarations: [
        DaffCheckboxComponent,
        DaffCheckboxSetComponent,
        DaffCheckboxControlValueAccessorDirective
    ],
    imports: [
        CommonModule
    ],
    providers: [
        DaffCheckboxSetComponent,
    ]
})
export class DaffCheckboxModule { }