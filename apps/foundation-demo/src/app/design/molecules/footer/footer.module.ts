import { NgModule } from '@angular/core';

import { DaffFooterComponent } from './components/footer/footer.component';
import { DaffFooterCategoryTitleComponent } from './components/footer-category-title/footer-category-title.component';
import { DaffFooterIconsComponent } from './components/footer-icons/footer-icons.component';
import { DaffFooterCategoryComponent } from './components/footer-category/footer-category.component';

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
