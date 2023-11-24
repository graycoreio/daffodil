import { NgModule } from '@angular/core';

import { CategoryRoutingModule } from './category-routing.module';
import { CategoryViewModule } from './pages/category-view/category-view.module';

@NgModule({
  imports: [
    CategoryViewModule,
    CategoryRoutingModule,
  ],
  exports: [
    CategoryViewModule,
  ],
})
export class CategoryModule { }
