import { NgModule } from '@angular/core';

import { DaffFooterComponent } from './components/daff-footer/daff-footer.component';
import { DaffFooterCategoryTitleComponent } from './components/daff-footer-category-title/daff-footer-category-title.component';
import { DaffFooterIconsComponent } from './components/daff-footer-icons/daff-footer-icons.component';
import { DaffFooterCategoryComponent } from './components/daff-footer-category/daff-footer-category.component';

@NgModule({
  declarations: [
    DaffFooterComponent,
    DaffFooterCategoryTitleComponent,
    DaffFooterIconsComponent,
    DaffFooterCategoryComponent
  ],
  exports: [
    DaffFooterComponent,
    DaffFooterCategoryTitleComponent,
    DaffFooterIconsComponent
  ]
})
export class DaffFooterModule { }
