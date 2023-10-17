import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DaffPaginatorModule } from '@daffodil/design';

import { PAGINATOR_EXAMPLES } from './examples';

@NgModule({
    declarations: [
        ...PAGINATOR_EXAMPLES,
    ],
    imports: [
        CommonModule,
        DaffPaginatorModule,
    ]
})
export class PaginatorExamplesModule { }
