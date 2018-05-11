import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreProductModule } from '@daffodil/core';
import { ProductListComponent } from './components/product-list/product-list.component';

import { ProductListViewComponent } from './pages/product-list-view/product-list-view.component';
import { ProductViewComponent } from './pages/product-view/product-view.component';
import { ProductComponent } from './components/product/product.component';
import { ProductCardComponent } from './components/product-card/product-card.component';

@NgModule({
  imports: [
    CommonModule,

    CoreProductModule,
  ],
  declarations: [
    ProductListComponent,
    ProductListViewComponent,
    ProductViewComponent,
    ProductComponent,
    ProductCardComponent
  ],
  exports: [
    ProductListComponent,
    ProductListViewComponent,
    ProductViewComponent,
    ProductComponent,
    ProductCardComponent    
  ]
})
export class ProductModule { }
