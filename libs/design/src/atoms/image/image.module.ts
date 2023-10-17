import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DaffImageComponent } from './image.component';

@NgModule({
    declarations: [
        DaffImageComponent,
    ],
    imports: [
        CommonModule,
    ],
    exports: [
        DaffImageComponent,
    ]
})
export class DaffImageModule { }
