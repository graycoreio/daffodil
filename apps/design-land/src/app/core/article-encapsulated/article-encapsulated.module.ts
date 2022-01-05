import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DesignLandArticleEncapsulatedComponent } from './article-encapsulated.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    DesignLandArticleEncapsulatedComponent,
  ],
  exports: [
    DesignLandArticleEncapsulatedComponent,
  ],
})
export class DesignLandArticleEncapsulatedModule { }
